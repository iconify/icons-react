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
		"content": `<style>.on8311biz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.521 19.5H2.5L11 3l5.101 9.903M7.5 9.75l1.75 1.75L11 9.75l1.75 1.75l1.75-1.75M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="on8311biz"/>`,
		"fallback": "uix:airport-elevation",
	});
}

export default Component;
