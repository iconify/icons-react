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
		"content": `<style>.jecdbkbvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 5.5c6.25 0 8 1.75 8 8s-1.75 8-8 8s-8-1.75-8-8s1.75-8 8-8m3.5-3h7.5V10");
}
</style><path class="jecdbkbvn"/>`,
		"fallback": "uix:corner-smoothing",
	});
}

export default Component;
