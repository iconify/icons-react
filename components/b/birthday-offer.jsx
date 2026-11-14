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
		"content": `<style>.wi8824z7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 11h8a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 17v-2.5A3.5 3.5 0 0 1 8 11m4 0V7m0 0c-1.5 0-1.5-2 0-3.5C13.5 5 13.5 7 12 7m-7.5 8h15");
}
</style><path class="wi8824z7c"/>`,
		"fallback": "uix:birthday-offer",
	});
}

export default Component;
