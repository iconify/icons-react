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

.nkl72kbds {
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}

.xbm-02c0x {
  d: path("m10.75 2.5l2.5 2.5l-2.5 2.5m2.5 14l-2.5-2.5l2.5-2.5");
}
</style><g class="hntgybcog"><path class="nkl72kbds"/><path class="xbm-02c0x"/></g>`,
		"fallback": "uix:cycle",
	});
}

export default Component;
