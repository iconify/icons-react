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
		"content": `<style>.dcc-u8bkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.599 0 3.056.318 4.252.889M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m11 8.5V21m3.5-5.5V21");
}
</style><path class="dcc-u8bkk"/>`,
		"fallback": "uix:deactivate-account",
	});
}

export default Component;
