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
		"content": `<style>.hu2-wbbvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21L9 8l7 7Zm7-17v1.5m5 1l1.5-1M18 11h2.5M8 4h.01");
}
</style><path class="hu2-wbbvc"/>`,
		"fallback": "uix:farewell-party",
	});
}

export default Component;
