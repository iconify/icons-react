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
		"content": `<style>.k99wg8lux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H21m-2.25-2.25L21 5l-2.25 2.25M3 12.5h11m-8.75-2.25L3 12.5l2.25 2.25M17 17.25v-3a1.25 1.25 0 0 1 2.5 0v3a2.25 2.25 0 1 1-2.5 0");
}
</style><path class="k99wg8lux"/>`,
		"fallback": "uix:flow-return-temperature",
	});
}

export default Component;
