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
		"content": `<style>.qrn35j92l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10.5L7.25 17H19m-6.5 0v4.5m-3.5 0h7M5 5h13.5M16 2.5L18.5 5L16 7.5");
}
</style><path class="qrn35j92l"/>`,
		"fallback": "uix:forward-facing-seat",
	});
}

export default Component;
