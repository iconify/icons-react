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
		"content": `<style>.eoe68rb1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 11h6a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 18v-3.5A3.5 3.5 0 0 1 9 11m3-9l2 2.75a2.25 2.25 0 1 1-4 0ZM9 13.75v5m3-5v5m3-5v5");
}
</style><path class="eoe68rb1b"/>`,
		"fallback": "uix:floor-drain",
	});
}

export default Component;
