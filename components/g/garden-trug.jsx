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
		"content": `<style>.s155oe-4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19l-3 7.5h-13ZM7 12V7.5a5 5 0 0 1 10 0V12M4 15.75h16");
}
</style><path class="s155oe-4b"/>`,
		"fallback": "uix-sharp:garden-trug",
	});
}

export default Component;
