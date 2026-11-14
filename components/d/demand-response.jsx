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
		"content": `<style>.ttbrf_b7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 21.5l3.75-18h2.5l2.206 12.216M3 7h16M4.5 12h12.3m1.2 2.5v7m-3-3l3 3l3-3");
}
</style><path class="ttbrf_b7y"/>`,
		"fallback": "uix:demand-response",
	});
}

export default Component;
