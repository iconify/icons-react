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
		"content": `<style>.aqq3udigm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 11.5h4.5A1.75 1.75 0 0 1 12 13.25v6.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 4 19.75v-6.5a1.75 1.75 0 0 1 1.75-1.75M8 2.5c1.75 1.75 2.5 2.75 2.5 4a2.5 2.5 0 0 1-5 0c0-1.25.75-2.25 2.5-4M8 9v2.5m10 3V18m0 3h.01");
}
</style><path class="aqq3udigm"/>`,
		"fallback": "uix:candle-hazard",
	});
}

export default Component;
