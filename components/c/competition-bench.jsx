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
		"content": `<style>.cyclr790u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21.5V5m12 16.5V5M3.25 7.5h17.5m-17.5-3v6m17.5-6v6M5 14h14a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 19 17H5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 5 14");
}
</style><path class="cyclr790u"/>`,
		"fallback": "uix:competition-bench",
	});
}

export default Component;
