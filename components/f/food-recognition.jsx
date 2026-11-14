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
		"content": `<style>.y1pv--bjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5h13c-.5 2-2.5 3-4.5 3h-4c-2 0-4-1-4.5-3m2 0c0-3.5 1.5-5 3-4.5c.5-2 2.5-2.5 3.5-.5c1.5 0 2.5 2 2.5 5M2.5 7V4.5a2 2 0 0 1 2-2H7m10 0h2.5a2 2 0 0 1 2 2V7m0 10v2.5a2 2 0 0 1-2 2H17m-10 0H4.5a2 2 0 0 1-2-2V17");
}
</style><path class="y1pv--bjb"/>`,
		"fallback": "uix:food-recognition",
	});
}

export default Component;
