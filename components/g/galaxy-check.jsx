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
		"content": `<style>.bye8libtl {
  d: path("M10.5 10.5h.01m3.49 0c0-4.75-6.5-6-9.5-3c-2.5 2.5-2 6.5.5 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t-gm85b-x {
  d: path("M7 10.5c0 4.75 6.5 6 9.5 3c2.5-2.5 2-6.5-.5-9M14.75 18l2 2L21 15.75");
}
</style><g class="hntgybcog"><path class="bye8libtl"/><path class="t-gm85b-x"/></g>`,
		"fallback": "uix:galaxy-check",
	});
}

export default Component;
