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
		"content": `<style>.w1-dw6bit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5h16v3.5L21.5 19h-8L12 13.5L10.5 19h-8L4 8.5Zm0 3.5h16m-2.75 0l1.5 10.5");
}
</style><path class="w1-dw6bit"/>`,
		"fallback": "uix:gym-shorts",
	});
}

export default Component;
