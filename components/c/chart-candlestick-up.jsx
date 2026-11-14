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
		"content": `<style>.u9_36ibiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13h1a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 5.5 19h-1a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 4.5 13m7-5h1a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 12.5 14h-1a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 11.5 8m7-4h1a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 19.5 10h-1a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 18.5 4M5 10.5V13m0 6v2.5m7-16V8m0 6v2.5m7-14V4m0 6v2");
}
</style><path class="u9_36ibiq"/>`,
		"fallback": "uix:chart-candlestick-up",
	});
}

export default Component;
