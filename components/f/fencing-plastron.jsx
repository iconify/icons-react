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
		"content": `<style>.bx2tdtb1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7h3.5q4.5 5 9 0H20c0 6.5-3.5 11.5-8 14.5c-4.5-3-8-8-8-14.5m3.5 0V2.5m9 4.5V2.5");
}
</style><path class="bx2tdtb1x"/>`,
		"fallback": "uix:fencing-plastron",
	});
}

export default Component;
