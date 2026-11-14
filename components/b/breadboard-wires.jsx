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

.l6aw85bah {
  d: path("M6 8h12a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 20H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 8");
}

.l7dxj4nrm {
  d: path("M12 11c0-8 5-8 5 0M7 11h.01M12 11h.01M17 11h.01M7 14h.01M12 14h.01M17 14h.01M7 17h.01M12 17h.01M17 17h.01");
}
</style><g class="hntgybcog"><path class="l6aw85bah"/><path class="l7dxj4nrm"/></g>`,
		"fallback": "uix:breadboard-wires",
	});
}

export default Component;
