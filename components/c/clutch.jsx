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
		"content": `<style>.duwz3z9hh {
  width: 18.5px;
  height: 9px;
  x: 2.75px;
  y: 8.5px;
  rx: 2.5px;
}

.e3i6g-b2g {
  d: path("M3.25 9.75q3.75 2.85 7.5 3m2.5 0q3.75-.15 7.5-3");
}

.f8gwd2bht {
  d: path("M5.5 17.5C3.75 19 4 21.25 6 21.25s2.25-2 1.25-3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n3qax8-nt {
  cx: 12px;
  cy: 12.75px;
  r: 1.25px;
}
</style><g class="hntgybcog"><rect class="duwz3z9hh"/><path class="e3i6g-b2g"/><circle class="n3qax8-nt"/><path class="f8gwd2bht"/></g>`,
		"fallback": "iconoven:clutch",
	});
}

export default Component;
