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

.m-24hcwek {
  d: path("M15 2.5V5a2 2 0 0 0 2 2h2.5m-11-.5h-1v4h1m2.75-4h1v4h-1M7.5 14h9m-9 3.5H13");
}

.tt_5rhffm {
  d: path("M7 2.5h8L19.5 7v12a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="tt_5rhffm"/><path class="m-24hcwek"/></g>`,
		"fallback": "uix:ini-file",
	});
}

export default Component;
