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
		"content": `<style>.ztb4s1k_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8h13m-3.5-3.5L17 8l-3.5 3.5M20 16H7m3.5-3.5L7 16l3.5 3.5");
}
</style><path class="ztb4s1k_x"/>`,
		"fallback": "uix:forex-buy-sell",
	});
}

export default Component;
