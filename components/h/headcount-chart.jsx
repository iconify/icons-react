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
		"content": `<style>.enor6qb9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 21.5h20m-19 0v-3a2 2 0 0 1 4 0v3m3 0v-6.75a2 2 0 0 1 4 0v6.75m3 0V11a2 2 0 0 1 4 0v10.5M3.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7-3.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7-3.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="enor6qb9b"/>`,
		"fallback": "uix:headcount-chart",
	});
}

export default Component;
