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
		"content": `<style>.pvj0e8yee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.5h6.5A1.75 1.75 0 0 1 17 4.25A1.75 1.75 0 0 1 15.25 6h-6.5A1.75 1.75 0 0 1 7 4.25A1.75 1.75 0 0 1 8.75 2.5M8 6v1.5c-2 1-2.5 2-2.5 4V19A2.5 2.5 0 0 0 8 21.5h8a2.5 2.5 0 0 0 2.5-2.5v-7.5c0-2-.5-3-2.5-4V6m-6.5 6.5h.01M14.5 14h.01m-4.01 3.5h.01");
}
</style><path class="pvj0e8yee"/>`,
		"fallback": "uix:fairy-lights-jar",
	});
}

export default Component;
