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
		"content": `<style>.fpwzdub6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 3l4.75 4.75m0-3.5v3.5h-3.5M21 3l-4.75 4.75m0-3.5v3.5h3.5M3 21l4.75-4.75m0 3.5v-3.5h-3.5M21 21l-4.75-4.75m0 3.5v-3.5h3.5M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="fpwzdub6g"/>`,
		"fallback": "uix:emergency-meeting-point",
	});
}

export default Component;
