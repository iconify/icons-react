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
		"content": `<style>.evijc4t2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8q6.75-3.75 18-3M5 13.5c5-2.5 10-3 16.5-2.5m-19 8C7 16.5 12 16 18 16.5");
}
</style><path class="evijc4t2r"/>`,
		"fallback": "uix:cirrus-cloud",
	});
}

export default Component;
