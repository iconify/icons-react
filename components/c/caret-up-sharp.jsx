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
		"content": `<style>.o730c7bfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15.75h14.542l-1.842-1.7l-6-5.6l-.7-.686l-.7.686l-6 5.6l-1.842 1.7z");
}
</style><path class="o730c7bfg"/>`,
		"fallback": "iconoven:caret-up-sharp",
	});
}

export default Component;
