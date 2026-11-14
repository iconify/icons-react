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
		"content": `<style>.wec3t5bap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19m-14-6zA1.5 1.5 0 0 1 9 16v3a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 6 19v-3a1.5 1.5 0 0 1 1.5-1.5m5.75-4za1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-7a1.5 1.5 0 0 1 1.5-1.5m5.75-4zA1.5 1.5 0 0 1 20.5 8v11a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V8A1.5 1.5 0 0 1 19 6.5M17.5 10h3m-13 1.5V4M5 6.5L7.5 4L10 6.5");
}
</style><path class="wec3t5bap"/>`,
		"fallback": "uix:contribution-margin",
	});
}

export default Component;
