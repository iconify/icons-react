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
		"content": `<style>.g4sh9jbyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3.5zA3.25 3.25 0 0 1 10 6.75v10.5a3.25 3.25 0 0 1-3.25 3.25a3.25 3.25 0 0 1-3.25-3.25V6.75A3.25 3.25 0 0 1 6.75 3.5m10 17V4m-3.5 3.5l3.5-3.5l3.5 3.5M3.5 12H10");
}
</style><path class="g4sh9jbyf"/>`,
		"fallback": "uix:dose-increase",
	});
}

export default Component;
