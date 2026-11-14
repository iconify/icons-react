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

.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.v3j62abgb {
  fill: currentColor;
  d: path("M8.5 9.5za1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1");
}

.vuszc-7qn {
  d: path("M7.5 13.25h2v2h-2Zm0 3.75h2v2h-2Zm5-6.5h4m-4 3.75h4m-4 3.75H15");
}

.yms1g_6ir {
  d: path("M10.75 3h2.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25h-2.5A2.25 2.25 0 0 1 8.5 5.25A2.25 2.25 0 0 1 10.75 3");
}
</style><g class="hntgybcog"><path class="re3nbbcdl"/><path class="yms1g_6ir"/><path class="v3j62abgb"/><path class="vuszc-7qn"/></g>`,
		"fallback": "uix:close-checklist",
	});
}

export default Component;
