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

.mzfeuel6o {
  cx: 14.5px;
  cy: 15.5px;
  r: 2.5px;
}

.p763c9bvf {
  d: path("m19.75 17.5l1.5.5m-3.5 2L19 21.25");
}

.wz9c3za9x {
  width: 15.5px;
  height: 5px;
  x: 2.75px;
  y: 5px;
  rx: 2.5px;
}

.zoxif1b-p {
  d: path("M6.5 5L4.75 2.75M10 14.5a4.5 4.5 0 0 1 9 0");
}
</style><g class="hntgybcog"><rect class="wz9c3za9x"/><path class="zoxif1b-p"/><circle class="mzfeuel6o"/><path class="p763c9bvf"/></g>`,
		"fallback": "iconoven:angle-grinder",
	});
}

export default Component;
