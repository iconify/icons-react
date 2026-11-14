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
		"content": `<style>.q3xwbbbxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.75H5L8 6.5v11l-3-3.25H2.5ZM10.75 18v-2.5M13.5 18v-5m2.75 5v-7.5M19 18V8m2.75 10V5.5");
}
</style><path class="q3xwbbbxs"/>`,
		"fallback": "uix:decibel",
	});
}

export default Component;
