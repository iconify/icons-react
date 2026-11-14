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
		"content": `<style>.mpt1zubsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 12a3.75 3.75 0 0 1 0-7a3.75 3.75 0 0 1 0 7a3.75 3.75 0 0 1 6 3.5a3.75 3.75 0 0 1-6-3.5a3.75 3.75 0 0 1-6 3.5a3.75 3.75 0 0 1 6-3.5m8.192-5.736a10 10 0 0 1 0 11.472");
}
</style><path class="mpt1zubsm"/>`,
		"fallback": "uix:fan-speed-low",
	});
}

export default Component;
