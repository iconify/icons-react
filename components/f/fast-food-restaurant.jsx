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
		"content": `<style>.xh-issc0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14a4.75 4.75 0 0 1 9.5 0Zm2 3H10a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m10.25-7h6.75l-1 11h-4.75Zm2 0V4.5M19.5 10V5.5");
}
</style><path class="xh-issc0t"/>`,
		"fallback": "uix:fast-food-restaurant",
	});
}

export default Component;
