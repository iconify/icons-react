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
		"content": `<style>.wi-scubui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3.5V6A2.5 2.5 0 0 1 6 8.5H3.5m12-5V6A2.5 2.5 0 0 0 18 8.5h2.5m0 7H18a2.5 2.5 0 0 0-2.5 2.5v2.5m-12-5H6A2.5 2.5 0 0 1 8.5 18v2.5");
}
</style><path class="wi-scubui"/>`,
		"fallback": "uix:fullscreen-exit",
	});
}

export default Component;
