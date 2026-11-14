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
		"content": `<style>.yf-h_gb_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4.5h15.5A1.25 1.25 0 0 1 21 5.75A1.25 1.25 0 0 1 19.75 7H4.25A1.25 1.25 0 0 1 3 5.75A1.25 1.25 0 0 1 4.25 4.5M5.5 7v13.5M18.5 7v13.5m-13-6h13");
}
</style><path class="yf-h_gb_t"/>`,
		"fallback": "uix:console-table",
	});
}

export default Component;
