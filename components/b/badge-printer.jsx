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

.m_-5aibrg {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v2.75A4.375 4.375 0 0 1 17.125 15H6.875A4.375 4.375 0 0 1 2.5 10.625v-2.75A4.375 4.375 0 0 1 6.875 3.5");
}

.yzvzm9_hb {
  d: path("M8 11v9.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11M6 11h12m-7.5 7h3");
}
</style><g class="hntgybcog"><path class="m_-5aibrg"/><path class="yzvzm9_hb"/></g>`,
		"fallback": "uix:badge-printer",
	});
}

export default Component;
