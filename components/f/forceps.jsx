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
		"content": `<style>.mpze6u10y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3.5c0-1 3-1 3 0m-3 0l-3.75 13c-.25 1.25.75 3 3 4.75M13.5 3.5l3.75 13c.25 1.25-.75 3-3 4.75m-6-10.75l1.5.5m6-.5l-1.5.5");
}
</style><path class="mpze6u10y"/>`,
		"fallback": "uix:forceps",
	});
}

export default Component;
