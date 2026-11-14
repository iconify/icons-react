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
		"content": `<style>.hkk1fbv-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V8m14 13.5V8M3.5 8h17m-17 4.5h17m-18 9h5m9 0h5");
}
</style><path class="hkk1fbv-m"/>`,
		"fallback": "uix:hurdles",
	});
}

export default Component;
