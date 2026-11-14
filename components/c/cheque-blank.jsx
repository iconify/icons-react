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
		"content": `<style>.eo479_bhu {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5m-.5 4.5h1.25m2.75 0h1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u8drl6bps {
  d: path("M15.25 7.75h2a1.5 1.5 0 0 1 1.5 1.5v.25a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-.25a1.5 1.5 0 0 1 1.5-1.5M5.5 15.5h1.25m5.75 0h1.25m2.75 0h1.25");
}
</style><g class="hntgybcog"><path class="eo479_bhu"/><path class="u8drl6bps"/></g>`,
		"fallback": "uix:cheque-blank",
	});
}

export default Component;
