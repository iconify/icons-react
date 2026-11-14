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
		"content": `<style>.brio4-vja {
  d: path("M7.5 18a4.5 11.5 0 0 1 9 0M4.25 12.5h15.5M2.5 18h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q528orbwt {
  d: path("M3 18a9 11.5 0 0 1 18 0");
}
</style><g class="hntgybcog"><path class="q528orbwt"/><path class="brio4-vja"/></g>`,
		"fallback": "uix:climbing-frame",
	});
}

export default Component;
