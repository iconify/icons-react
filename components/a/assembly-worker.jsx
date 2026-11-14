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
		"content": `<style>.vlo_hrb4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6.5h1.5a4 4 0 0 1 8 0H16Zm2 0v2a3.5 3.5 0 0 0 7 0v-2M3 21c0-3.5 3.5-6 7.5-6c1.527 0 2.981.364 4.195 1.009m6.323-1.027za1.25 1.25 0 0 1 0 1.768l-1.768 1.768a1.25 1.25 0 0 1-1.768 0a1.25 1.25 0 0 1 0-1.768l1.768-1.768a1.25 1.25 0 0 1 1.768 0M17.5 18.5l-2.75 2.75");
}
</style><path class="vlo_hrb4l"/>`,
		"fallback": "uix:assembly-worker",
	});
}

export default Component;
