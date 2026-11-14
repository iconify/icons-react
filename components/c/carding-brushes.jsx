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
		"content": `<style>.see9s_2dj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h12l6.5-3.5M21 17H9l-6.5 3.5M4.5 7v2.5m3-2.5v2.5m3-2.5v2.5m3-2.5v2.5m-3 7.5v-2.5m3 2.5v-2.5m3 2.5v-2.5m3 2.5v-2.5");
}
</style><path class="see9s_2dj"/>`,
		"fallback": "uix:carding-brushes",
	});
}

export default Component;
