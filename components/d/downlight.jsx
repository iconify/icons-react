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
		"content": `<style>.ev3ji_5xn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18M7 7c0 3 2.25 5 5 5s5-2 5-5m-5 8v3m-5-3.5L5.5 17M17 14.5l1.5 2.5");
}
</style><path class="ev3ji_5xn"/>`,
		"fallback": "uix:downlight",
	});
}

export default Component;
