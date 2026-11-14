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

.ipm4cr-ng {
  d: path("M18.5 10a2.75 2.75 0 0 1-2 4.5a2.75 2.75 0 0 1-4.5 2a2.75 2.75 0 0 1-4.5-2a2.75 2.75 0 0 1-2-4.5a2.75 2.75 0 0 1 2-4.5a2.75 2.75 0 0 1 4.5-2a2.75 2.75 0 0 1 4.5 2a2.75 2.75 0 0 1 2 4.5");
}

.o4p0wvauk {
  d: path("m12.75 6.5l-2.5 3.75h3.5L11.25 14M8.5 16L7 20.5l1.75-1l1.5 1l.25-3.5m5-1l1.5 4.5l-1.75-1l-1.5 1l-.25-3.5");
}
</style><g class="hntgybcog"><path class="ipm4cr-ng"/><path class="o4p0wvauk"/></g>`,
		"fallback": "uix:efficiency-badge",
	});
}

export default Component;
