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

.sav-98b9g {
  d: path("M5 21.5v-17c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v6.881M14 12.5h.01m.49 5.75a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m2.25 0h.01m2.49 0h.01");
}

.x-6ru0kwl {
  d: path("M17.5 14.75c.25-1 1.5-1.25 2-.5");
}
</style><g class="hntgybcog"><path class="sav-98b9g"/><path class="x-6ru0kwl"/></g>`,
		"fallback": "uix:delivery-room",
	});
}

export default Component;
