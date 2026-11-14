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
		"content": `<style>.g4527v6gj {
  d: path("M14 2.5v5h5M8 11h8m-1.25 7l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lcuoe0bar {
  d: path("M14.271 21.5H5v-19h9l5 5v6.329");
}
</style><g class="hntgybcog"><path class="lcuoe0bar"/><path class="g4527v6gj"/></g>`,
		"fallback": "uix:customs-clearance",
	});
}

export default Component;
