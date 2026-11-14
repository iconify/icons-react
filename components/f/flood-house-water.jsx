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
		"content": `<style>.ro72bob6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12v-1.5L12 3.25l8.5 7.25V12m-18 3.75q2.25-2 4.75 0q2.25 2 4.75 0q2.25-2 4.75 0q2.25 2 4.75 0m-19 4.5q2.25-2 4.75 0q2.25 2 4.75 0q2.25-2 4.75 0q2.25 2 4.75 0");
}
</style><path class="ro72bob6t"/>`,
		"fallback": "uix:flood-house-water",
	});
}

export default Component;
