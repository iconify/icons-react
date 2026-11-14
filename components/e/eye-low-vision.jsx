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
		"content": `<style>.bjghabb4y {
  d: path("M2.5 12C5 7.5 8.25 5.5 12 5.5s7 2 9.5 6.5M4 15l2.5 1.75m3.5 1.5h4m3.5-1.5L20 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ortrdbylm {
  d: path("M9.25 11.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="bjghabb4y"/><path class="ortrdbylm"/></g>`,
		"fallback": "uix:eye-low-vision",
	});
}

export default Component;
