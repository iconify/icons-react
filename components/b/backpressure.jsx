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
		"content": `<style>.vrxdlxeyi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19m-19 11h19m-6-7.5h.01M19 10h.01m-3.51 4h.01M19 14h.01M11 12H4.5M7 9.5L4.5 12L7 14.5");
}
</style><path class="vrxdlxeyi"/>`,
		"fallback": "uix:backpressure",
	});
}

export default Component;
