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
		"content": `<style>.xt7l-sove {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-11.5 5h5A1.5 1.5 0 0 1 16 13v4a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 17v-4a1.5 1.5 0 0 1 1.5-1.5m-5 8.25c0-1 1.5-1.25 3.5-1.25h8c2 0 3.5.25 3.5 1.25q0 1.5-7.5 1.5t-7.5-1.5M8 16h8");
}
</style><path class="xt7l-sove"/>`,
		"fallback": "uix:hat-shop",
	});
}

export default Component;
