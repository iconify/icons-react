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
		"content": `<style>.dc_bs3bwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5h5A3.5 3.5 0 0 1 18 7v4.5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 11.5V7a3.5 3.5 0 0 1 3.5-3.5M9 15v6.5m6-6.5v6.5m-6.5-15V12");
}
</style><path class="dc_bs3bwh"/>`,
		"fallback": "uix:capacitor-electrolytic",
	});
}

export default Component;
