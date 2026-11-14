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
		"content": `<style>.qaril2bvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20c0-8 2-12 7-12s7 4 7 12q-1.75-1.5-3.5 0T12 20t-3.5 0T5 20M9.5 8.25l-1.75-2.5m6.75 2.5l1.75-2.5M5.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m10 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="qaril2bvp"/>`,
		"fallback": "uix:alien-life",
	});
}

export default Component;
