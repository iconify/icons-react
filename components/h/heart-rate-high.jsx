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
		"content": `<style>.flopxgbbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11H4l1.75-7.5l2 11.5l2-11.5l2 11.5l1.75-4H15m3 10.5v-7m-3 3l3-3l3 3");
}
</style><path class="flopxgbbf"/>`,
		"fallback": "uix:heart-rate-high",
	});
}

export default Component;
