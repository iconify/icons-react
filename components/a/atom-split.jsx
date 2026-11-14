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
		"content": `<style>.y4-h16bvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 7a5 5 0 0 0 0 10Zm3 0a5 5 0 0 1 0 10ZM2.75 12h.01m18.49 0h.01");
}
</style><path class="y4-h16bvu"/>`,
		"fallback": "uix-sharp:atom-split",
	});
}

export default Component;
