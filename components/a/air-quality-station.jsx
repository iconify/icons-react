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
		"content": `<style>.l0rnz0zui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h2.75A2.625 2.625 0 0 1 11 5.625v2.75A2.625 2.625 0 0 1 8.375 11h-2.75A2.625 2.625 0 0 1 3 8.375v-2.75A2.625 2.625 0 0 1 5.625 3M7 11v10.5m-3 0h6m4-17q1.75-1.5 3.5 0t3.5 0M14 9q1.75-1.5 3.5 0T21 9m-7 4.5q1.75-1.5 3.5 0t3.5 0");
}
</style><path class="l0rnz0zui"/>`,
		"fallback": "uix:air-quality-station",
	});
}

export default Component;
