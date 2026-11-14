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
		"content": `<style>.dib80966x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.378 19.877l-1.128-.627l-2 1.25L6 19.25L4 20.5v-18h12.5V11m-9-4H13m-5.5 4H13m.75 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}
</style><path class="dib80966x"/>`,
		"fallback": "uix:fee-payment-official",
	});
}

export default Component;
