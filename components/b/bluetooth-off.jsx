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
		"content": `<style>.l9e8cwbbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.271 18.229L12 20.5v-4.588m0-7.9V3.5L16.5 8l-2.403 2.15m-4.173 3.734L7 16.5m-3.5-13l17 17");
}
</style><path class="l9e8cwbbe"/>`,
		"fallback": "uix:bluetooth-off",
	});
}

export default Component;
