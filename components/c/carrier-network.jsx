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
		"content": `<style>.ri4-4uvum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 14a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m.25-8.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 18.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m14.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-5-10.5v3.75m2.25 3.75l3 1.75m-7.5-1.75l-3 1.75");
}
</style><path class="ri4-4uvum"/>`,
		"fallback": "uix:carrier-network",
	});
}

export default Component;
