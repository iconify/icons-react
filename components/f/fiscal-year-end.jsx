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
		"content": `<style>.i73ry7b8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h13m0 0V5m0 0q3-1 6 .5v6q-3-1.5-6-.5");
}
</style><path class="i73ry7b8k"/>`,
		"fallback": "uix:fiscal-year-end",
	});
}

export default Component;
