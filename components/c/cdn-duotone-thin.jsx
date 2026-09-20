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
		"content": `<style>.b09_ctbde {
  d: path("M2 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzfx__bqu {
  d: path("M18 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ic_6n1b1y {
  fill: currentColor;
  d: path("M2 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jea8fibeb {
  fill: currentColor;
  d: path("M2 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kypa-ub6a {
  fill: currentColor;
  d: path("M18 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ng6jddb9r {
  d: path("M18 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.o96cjofqo {
  fill: currentColor;
  d: path("M18 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x6e_qy8ax {
  fill: currentColor;
  d: path("M7 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xq1pi7btv {
  d: path("M2 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zey5ebc0a {
  d: path("M7 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}
</style><g class="hntgybcog"><path class="x6e_qy8ax"/><path class="ic_6n1b1y"/><path class="o96cjofqo"/><path class="jea8fibeb"/><path class="kypa-ub6a"/><path class="zey5ebc0a"/><path class="b09_ctbde"/><path class="hzfx__bqu"/><path class="xq1pi7btv"/><path class="ng6jddb9r"/></g>`,
		"fallback": "iconmind:cdn-duotone-thin",
	});
}

export default Component;
