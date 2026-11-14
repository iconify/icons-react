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
		"content": `<style>.gdvefnbsy {
  d: path("M5.25 4.25L3 6.5l2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipx75qcff {
  d: path("M3 15q1-7 2.25 0t2.5 0t2.75 0t3 0q1.75-7 3.5 0q2 7 4 0M3 6.5h11");
}
</style><g class="hntgybcog"><path class="ipx75qcff"/><path class="gdvefnbsy"/></g>`,
		"fallback": "uix:blueshift",
	});
}

export default Component;
