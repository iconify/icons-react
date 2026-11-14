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
		"content": `<style>.d4reabc3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 15l1.5-8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2l1.5 8M5.5 15h13a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5A1.5 1.5 0 0 1 5.5 15m9 3q4 0 6 3");
}
</style><path class="d4reabc3k"/>`,
		"fallback": "uix:coffee-pod",
	});
}

export default Component;
