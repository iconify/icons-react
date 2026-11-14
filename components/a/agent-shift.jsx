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
		"content": `<style>.aq90a6bny {
  d: path("M18.75 9.5v1.25l1 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qkapydtat {
  d: path("M2.5 20c0-2.75 2.9-4.5 6.5-4.5s6.5 1.75 6.5 4.5c0 .6-.4 1-1 1h-11c-.6 0-1-.4-1-1m4-11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.vhzx3gt8g {
  d: path("M4 11.5V9a5 5 0 0 1 10 0v1.5m-10 1c0 1.25.75 2 2.25 2m9.5-2.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="qkapydtat"/><path class="vhzx3gt8g"/><path class="aq90a6bny"/></g>`,
		"fallback": "uix:agent-shift",
	});
}

export default Component;
