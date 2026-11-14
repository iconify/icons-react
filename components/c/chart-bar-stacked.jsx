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
		"content": `<style>.ah59_mt4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 10h1A1.75 1.75 0 0 1 7 11.75v8a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-8A1.75 1.75 0 0 1 4.25 10m7.25-7.5h1a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 11.5 2.5M18.75 13h1a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 19.75v-5A1.75 1.75 0 0 1 18.75 13M2.5 15.5H7M9.75 11h4.5M17 17.5h4.5");
}
</style><path class="ah59_mt4k"/>`,
		"fallback": "uix:chart-bar-stacked",
	});
}

export default Component;
