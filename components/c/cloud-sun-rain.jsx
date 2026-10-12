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
		"content": `<style>.bdil6pshu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.96 16.64a3.36 3.36 0 0 1-.46-6.69a4.83 4.83 0 0 1 8.95-1.16a3.78 3.78 0 0 1-.51 7.85ZM5.75 9.58a2.75 2.75 0 0 1 3.98-3.72M3.75 8H3m1.99-3.01l-.53-.53M8 3.75V3m2 15.75l-.75 2.5m4.25-2.5l-.75 2.5m4.25-2.5l-.75 2.5");
}
</style><path class="bdil6pshu"/>`,
		"fallback": "iconoven:cloud-sun-rain",
	});
}

export default Component;
