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

.phal6y-gi {
  d: path("M7.25 9.5v2.25a4.75 4.75 0 1 0 3 0V9.5m-2.5-3h2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 6.25 8a1.5 1.5 0 0 1 1.5-1.5");
}

.vtkg7lbxg {
  d: path("M8.75 6.5v-2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V19");
}
</style><g class="hntgybcog"><path class="phal6y-gi"/><path class="vtkg7lbxg"/></g>`,
		"fallback": "uix:delivery-tube",
	});
}

export default Component;
