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
		"content": `<style>.xxapzkbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7h1.5A1.75 1.75 0 0 1 7.5 8.75v6.5A1.75 1.75 0 0 1 5.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-6.5A1.75 1.75 0 0 1 4.25 7m5 2h5.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 14.75 15h-5.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 9.25 9m7.25 3h5m0-2.5v5");
}
</style><path class="xxapzkbbt"/>`,
		"fallback": "uix:actuator",
	});
}

export default Component;
