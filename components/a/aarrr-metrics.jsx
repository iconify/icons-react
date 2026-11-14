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
		"content": `<style>.dk7on9xuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19M4.75 15za1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75A1.75 1.75 0 0 1 3 18.75v-2A1.75 1.75 0 0 1 4.75 15m6.75-3za1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 11.5 12m6.75-3zA1.75 1.75 0 0 1 20 10.75v8a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75v-8A1.75 1.75 0 0 1 18.25 9m0 0V2.5l3.25 1.75L18.25 6");
}
</style><path class="dk7on9xuc"/>`,
		"fallback": "uix:aarrr-metrics",
	});
}

export default Component;
