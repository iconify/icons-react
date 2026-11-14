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
		"content": `<style>.lndhd3nji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8c3 6 15 6 18 0M6.75 11.5L5 14.75m7-2.25V16m5.25-4.5L19 14.75");
}
</style><path class="lndhd3nji"/>`,
		"fallback": "uix:eyelid-closed",
	});
}

export default Component;
