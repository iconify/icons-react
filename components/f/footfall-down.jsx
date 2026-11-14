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
		"content": `<style>.oyrcdbbdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 6.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M3.5 17v-3a4.5 4.5 0 0 1 9 0v3M18 5v13m-2.5-2.5L18 18l2.5-2.5");
}
</style><path class="oyrcdbbdu"/>`,
		"fallback": "uix:footfall-down",
	});
}

export default Component;
