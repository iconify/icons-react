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
		"content": `<style>.abn59i1vt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 9.75h.01");
}

.awg79g8wv {
  width: 11px;
  height: 3.25px;
  x: 6.5px;
  y: 15px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.dvetwtlgq {
  width: 16.5px;
  height: 2.5px;
  x: 3.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.25px;
}

.sjr6zabzf {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 7.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yw_4kwbsc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.75h18.5");
}
</style><g class="y9tr6bcfx"><rect class="dvetwtlgq"/><rect class="sjr6zabzf"/><path class="yw_4kwbsc"/><path class="abn59i1vt"/><rect class="awg79g8wv"/></g>`,
		"fallback": "iconoven:copier",
	});
}

export default Component;
