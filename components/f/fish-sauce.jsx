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

.l0epz05nr {
  d: path("M9 16c1.25-2 3.5-2 4.5 0l1.5-1.25v2.5L13.5 16c-1 2-3.25 2-4.5 0");
}

.rkhzbt0qs {
  d: path("M11 2.5h2A1.5 1.5 0 0 1 14.5 4A1.5 1.5 0 0 1 13 5.5h-2A1.5 1.5 0 0 1 9.5 4A1.5 1.5 0 0 1 11 2.5m-.5 3v2l-4 3.5v8.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V11l-4-3.5v-2");
}
</style><g class="hntgybcog"><path class="rkhzbt0qs"/><path class="l0epz05nr"/></g>`,
		"fallback": "uix:fish-sauce",
	});
}

export default Component;
