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
		"content": `<style>.a4-yg9b_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5.5l3.65-2.028a1.75 1.75 0 0 1 1.7 0L16.5 5.5a1.334 1.334 0 0 1-.648 2.5H8.148A1.334 1.334 0 0 1 7.5 5.5m-5 15h19M4 17.5h16m-13.5-7V15m5.5-4.5V15m5.5-4.5V15");
}
</style><path class="a4-yg9b_d"/>`,
		"fallback": "uix:campus-museum",
	});
}

export default Component;
