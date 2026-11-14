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
		"content": `<style>.fszscbbhq {
  d: path("M7 8.25a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0m6 0a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0M6.25 12.5a2.25 1.25 0 1 0 4.5 0a2.25 1.25 0 1 0-4.5 0m7 0a2.25 1.25 0 1 0 4.5 0a2.25 1.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj96bfb1c {
  d: path("M5 5h14l2.5 11v2.75h-19V16ZM2.5 16h19");
}
</style><g class="hntgybcog"><path class="wj96bfb1c"/><path class="fszscbbhq"/></g>`,
		"fallback": "uix:baking-tray-cookies",
	});
}

export default Component;
