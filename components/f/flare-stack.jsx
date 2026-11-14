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
		"content": `<style>.qplf6-tcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 10.5h1A1.5 1.5 0 0 1 14 12v8a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 20v-8a1.5 1.5 0 0 1 1.5-1.5M6 21.5h12m-6-19c3.5 2.5 3 5 0 5s-3.5-2.5 0-5");
}
</style><path class="qplf6-tcu"/>`,
		"fallback": "uix:flare-stack",
	});
}

export default Component;
