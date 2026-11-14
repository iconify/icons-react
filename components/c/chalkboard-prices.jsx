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
		"content": `<style>.fx6_m0qpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 3h9.75A2.625 2.625 0 0 1 19.5 5.625v6.75A2.625 2.625 0 0 1 16.875 15h-9.75A2.625 2.625 0 0 1 4.5 12.375v-6.75A2.625 2.625 0 0 1 7.125 3M6.5 15l-2 6.5m13-6.5l2 6.5M7.5 7h9m-9 4H13");
}
</style><path class="fx6_m0qpo"/>`,
		"fallback": "uix:chalkboard-prices",
	});
}

export default Component;
