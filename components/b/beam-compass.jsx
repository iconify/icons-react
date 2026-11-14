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
		"content": `<style>.ld02nwk-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM11 6.25L5.5 21.5M13 6.25l5.5 15.25m-.75-7.041a11.5 11.5 0 0 1-11.5 0");
}
</style><path class="ld02nwk-c"/>`,
		"fallback": "uix-sharp:beam-compass",
	});
}

export default Component;
