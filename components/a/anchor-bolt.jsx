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
		"content": `<style>.bnp85cboi {
  d: path("M10.5 9v3m3-3v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ome4xobjc {
  width: 18.5px;
  height: 6.25px;
  x: 2.75px;
  y: 15px;
  rx: 1.5px;
}

.si_ggib2g {
  d: path("M12 15v3.25m0-15V9m0 3v3");
}

.wk1myubac {
  width: 9px;
  height: 3px;
  x: 7.5px;
  y: 9px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="ome4xobjc"/><path class="si_ggib2g"/><rect class="wk1myubac"/><path class="bnp85cboi"/></g>`,
		"fallback": "iconoven:anchor-bolt",
	});
}

export default Component;
