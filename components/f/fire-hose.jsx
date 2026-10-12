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
		"content": `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.b405utblj {
  cx: 10.5px;
  cy: 11px;
  r: 4.5px;
}

.fkwkb8hzx {
  cx: 10.5px;
  cy: 11px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pld_2hbet {
  d: path("M10.5 15.5h6.25L18 17");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><circle class="b405utblj"/><circle class="fkwkb8hzx"/><path class="pld_2hbet"/></g>`,
		"fallback": "iconoven:fire-hose",
	});
}

export default Component;
