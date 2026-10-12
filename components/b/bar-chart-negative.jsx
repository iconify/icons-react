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

.ijs0p36kx {
  d: path("M2.75 12h18.5");
}

.r8c2t65yh {
  width: 3.5px;
  height: 4.5px;
  x: 4.25px;
  y: 5.25px;
  rx: 1px;
}

.trw0bvood {
  width: 3.5px;
  height: 7px;
  x: 10.25px;
  y: 14.25px;
  rx: 1px;
}

.ud8_d0biv {
  width: 3.5px;
  height: 7px;
  x: 16.25px;
  y: 2.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="ijs0p36kx"/><rect class="r8c2t65yh"/><rect class="trw0bvood"/><rect class="ud8_d0biv"/></g>`,
		"fallback": "iconoven:bar-chart-negative",
	});
}

export default Component;
