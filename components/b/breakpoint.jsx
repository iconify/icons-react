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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jc39mccfs {
  d: path("M3 5h18m-7 7h7M3 19h10");
}

.khz7zkgfi {
  fill: currentColor;
  d: path("M3.25 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="khz7zkgfi"/><path class="jc39mccfs"/></g>`,
		"fallback": "uix:breakpoint",
	});
}

export default Component;
