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
		"content": `<style>.c5g0p5m5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8h13c0 4.5-3 6.5-6.5 6.5s-6.5-2-6.5-6.5m6.5 6.5V20m-4 0h8M8 8a4 4 0 0 1 8 0");
}
</style><path class="c5g0p5m5h"/>`,
		"fallback": "uix:communion-chalice-bread",
	});
}

export default Component;
