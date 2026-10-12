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
		"content": `<style>.afy1etbtw {
  width: 12.5px;
  height: 16.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.25px;
}

.eypmcvume {
  cx: 16.5px;
  cy: 15px;
  r: 3.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_sxo56nd {
  d: path("m15 15l1 1l2-2m-3 4.5v2.75l1.5-1l1.5 1V18.5");
}

.ubz8hc38d {
  d: path("M7.25 7h5.5m-5.5 3.5h3.5");
}
</style><g class="hntgybcog"><rect class="afy1etbtw"/><path class="ubz8hc38d"/><circle class="eypmcvume"/><path class="j_sxo56nd"/></g>`,
		"fallback": "iconoven:content-credential",
	});
}

export default Component;
