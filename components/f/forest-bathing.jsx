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
		"content": `<style>.b_edljxxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V14a2.5 2.5 0 1 1 0-5a2.5 2.5 0 1 1 0 5m14 7.5V14a2.5 2.5 0 1 1 0-5a2.5 2.5 0 1 1 0 5m-7-.5v-4a3.5 3.5 0 1 1 0-7a3.5 3.5 0 1 1 0 7m-2.5 12c0-3 5-2 5-5.25");
}
</style><path class="b_edljxxj"/>`,
		"fallback": "uix:forest-bathing",
	});
}

export default Component;
