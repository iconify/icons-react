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
		"content": `<style>.u_prnjtwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9h8a3.5 3.5 0 0 1 3.5 3.5v4A3.5 3.5 0 0 1 14 20H6a3.5 3.5 0 0 1-3.5-3.5v-4A3.5 3.5 0 0 1 6 9m4 0v11m9.5-16.5Q19.5 6 22 6q-2.5 0-2.5 2.5Q19.5 6 17 6q2.5 0 2.5-2.5");
}
</style><path class="u_prnjtwt"/>`,
		"fallback": "uix:dishwasher-tablet",
	});
}

export default Component;
