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
		"content": `<style>.bdbnn2bqa {
  d: path("M2.5 18.5v-13A1.5 1.5 0 0 1 4 4h5l2 2.5h9A1.5 1.5 0 0 1 21.5 8v10.5A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5");
}

.h-kgvibiw {
  d: path("M7.75 10.5h8.5A1.75 1.75 0 0 1 18 12.25v2A1.75 1.75 0 0 1 16.25 16h-8.5A1.75 1.75 0 0 1 6 14.25v-2a1.75 1.75 0 0 1 1.75-1.75m2.25 0V16m4-5.5V16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bdbnn2bqa"/><path class="h-kgvibiw"/></g>`,
		"fallback": "uix:colour-swatch-group",
	});
}

export default Component;
