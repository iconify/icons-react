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
		"content": `<style>.cj-99jbrb {
  d: path("m11 6.75l2.5-.25l.25-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t37qd74zf {
  d: path("m3 7.5l5 6h13M2.5 17h19m-17 0v3.5m15-3.5v3.5M7 3.5c2.5-.5 5 .5 6.5 3");
}
</style><g class="hntgybcog"><path class="t37qd74zf"/><path class="cj-99jbrb"/></g>`,
		"fallback": "uix:bed-adjustable",
	});
}

export default Component;
