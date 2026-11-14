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

.l1cuv7bgj {
  d: path("M3 17V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9Z");
}

.rq0g29pwg {
  d: path("M5.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 12h18M8 6v6m5-6v6");
}
</style><g class="hntgybcog"><path class="l1cuv7bgj"/><path class="rq0g29pwg"/></g>`,
		"fallback": "uix:coach-bus",
	});
}

export default Component;
