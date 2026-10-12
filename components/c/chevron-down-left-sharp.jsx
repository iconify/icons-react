import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xo7g4vbxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.25h14.542L18.7 9.95l-6 5.6l-.7.686l-.7-.686l-6-5.6l-1.842-1.7z");
}
</style><path class="xo7g4vbxw"/>`,
		"fallback": "iconoven:chevron-down-left-sharp",
	});
}

export default Component;
