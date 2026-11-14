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
		"content": `<style>.q_4exccuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 10h9a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4a4 4 0 0 1 4-4m1 0V7.5A1.5 1.5 0 0 1 10 6h8M3.5 14h17");
}
</style><path class="q_4exccuz"/>`,
		"fallback": "uix:curling-stone",
	});
}

export default Component;
