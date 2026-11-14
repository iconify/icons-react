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
		"content": `<style>.adbiosb4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15C6 14 7 11 11 11h3c2 0 3-2 3.5-5l.5-1.5c.5-1 3-1 3.5 0c0 1-1 1-1.5 1.5l-.5 4c-.5 4-2 6.5-5.5 6.5H9c-2.5 0-4-.5-5.5-1.5m6 1.5V21m5-4.5V21");
}
</style><path class="adbiosb4o"/>`,
		"fallback": "uix:diplodocus",
	});
}

export default Component;
