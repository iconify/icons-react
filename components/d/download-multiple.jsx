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
		"content": `<style>.qgmyqtbic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3M7.5 3.5V13M5 10.5L7.5 13l2.5-2.5m6.5-7V13M14 10.5l2.5 2.5l2.5-2.5");
}
</style><path class="qgmyqtbic"/>`,
		"fallback": "uix:download-multiple",
	});
}

export default Component;
