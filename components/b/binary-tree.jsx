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
		"content": `<style>.cpuytsbrt {
  d: path("m11.28 7.37l-3.56 9.26m5-9.26l3.56 9.26");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hx-rxnbzw {
  cx: 7px;
  cy: 18.5px;
  r: 2px;
}

.m7thmobns {
  cx: 17px;
  cy: 18.5px;
  r: 2px;
}

.mwe-9d8rn {
  cx: 12px;
  cy: 5.5px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="mwe-9d8rn"/><circle class="hx-rxnbzw"/><circle class="m7thmobns"/><path class="cpuytsbrt"/></g>`,
		"fallback": "iconoven:binary-tree",
	});
}

export default Component;
