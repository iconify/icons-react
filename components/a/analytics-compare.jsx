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
		"content": `<style>.ytesqlrzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M3 20h6.25m-4.5 0v-8M8 20V7.5M14.75 20H21m-4.75 0V10m3.25 10v-6");
}
</style><path class="ytesqlrzs"/>`,
		"fallback": "uix:analytics-compare",
	});
}

export default Component;
