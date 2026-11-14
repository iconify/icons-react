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

.i7pq6jbac {
  d: path("M2.5 6.5v3h19v-3m-19 6v3h19v-3m-19 6v3h19v-3");
}

.u4wdfl5xf {
  d: path("M6.5 9.5V3h11v6.5");
}
</style><g class="hntgybcog"><path class="i7pq6jbac"/><path class="u4wdfl5xf"/></g>`,
		"fallback": "uix:desk-tray-stack",
	});
}

export default Component;
