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
		"content": `<style>.egcfdmbbe {
  d: path("m12 3l2 4.25L17 7l-.25 3L21 12l-4.25 2l.25 3l-3-.25L12 21l-2-4.25L7 17l.25-3L3 12l4.25-2L7 7l3 .25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k_hr5u1dl {
  d: path("M12 15c-1.75-1.25-2.5-2.25-2.5-3.25S10.25 10 11 10c.5 0 .75.25 1 .75c.25-.5.5-.75 1-.75c.75 0 1.5.75 1.5 1.75s-.75 2-2.5 3.25");
}
</style><g class="hntgybcog"><path class="egcfdmbbe"/><path class="k_hr5u1dl"/></g>`,
		"fallback": "uix:company-values",
	});
}

export default Component;
