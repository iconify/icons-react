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
		"content": `<style>.a-v2cdfzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4h13.75A2.625 2.625 0 0 1 21.5 6.625v1.75A2.625 2.625 0 0 1 18.875 11H5.125A2.625 2.625 0 0 1 2.5 8.375v-1.75A2.625 2.625 0 0 1 5.125 4m-.875 7h15.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 19.75 15H4.25a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 4.25 11m.25 4v6m15-6v6M8 18h8m-4 0v3");
}
</style><path class="a-v2cdfzb"/>`,
		"fallback": "uix:banquette",
	});
}

export default Component;
