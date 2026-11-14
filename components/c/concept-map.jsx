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
		"content": `<style>.o2cdq5s-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.75 5.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m15 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-15 13a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m15 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-8-8.75L6 7m8.25 2.75L18 7m-8.25 7.25L6 17m8.25-2.75L18 17");
}
</style><path class="o2cdq5s-c"/>`,
		"fallback": "uix:concept-map",
	});
}

export default Component;
