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

.m5pb4jeld {
  d: path("m5.7 8.6l2-1.5a1.75 1.75 0 0 1 2.45.35l1.5 2a1.75 1.75 0 0 1-.35 2.45l-2 1.5a1.75 1.75 0 0 1-2.45-.35l-1.5-2A1.75 1.75 0 0 1 5.7 8.6");
}

.tcwlcw27i {
  d: path("M4 18.75h15a1.5 1.5 0 0 0 1.5-1.5V8a1.5 1.5 0 0 0-2.4-1.2L3.9 17.45a1 1 0 0 0-.4.8a.5.5 0 0 0 .5.5");
}
</style><g class="hntgybcog"><path class="tcwlcw27i"/><path class="m5pb4jeld"/></g>`,
		"fallback": "uix:inclined-plane-block",
	});
}

export default Component;
