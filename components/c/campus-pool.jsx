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
		"content": `<style>.o6wv9rfgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14.5v-9a2.5 2.5 0 0 1 5 0m1.5 9v-9a2.5 2.5 0 0 1 5 0M6.5 9H13m-6.5 3H13M2.5 18.5q3-2.25 6 0t6 0t6 0");
}
</style><path class="o6wv9rfgh"/>`,
		"fallback": "uix:campus-pool",
	});
}

export default Component;
