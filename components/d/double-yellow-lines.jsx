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
		"content": `<style>.naqw94c8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5V6m0 4.25v3.5M3 18v3.5m18-19V6m0 4.25v3.5M21 18v3.5m-10.5-19v19m3-19v19");
}
</style><path class="naqw94c8k"/>`,
		"fallback": "uix:double-yellow-lines",
	});
}

export default Component;
