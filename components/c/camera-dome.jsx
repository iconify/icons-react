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

.ugkzx-t0u {
  cx: 13px;
  cy: 12.75px;
  r: 2px;
}

.us1syobgb {
  d: path("M2.75 5.25h18.5M3 8.25h18a9 9 0 0 1-18 0");
}
</style><g class="hntgybcog"><path class="us1syobgb"/><circle class="ugkzx-t0u"/></g>`,
		"fallback": "iconoven:camera-dome",
	});
}

export default Component;
