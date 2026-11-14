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
		"content": `<style>.it5rnubdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20h18M3.5 14l2-2.5l4.5 1L14 9L9.5 6l2-1.5L19 8c2 1 1.5 3-.5 4L7 16.5Z");
}
</style><path class="it5rnubdt"/>`,
		"fallback": "uix:airplane-takeoff",
	});
}

export default Component;
