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
		"content": `<style>.ddy7nc0xh {
  cx: 8.25px;
  cy: 15.25px;
  r: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j901znb6t {
  d: path("M14.25 13.25h7m-7 4h7");
}

.jx0p6s4hi {
  d: path("M2.75 6.5L5.5 3.25h2.75v9");
}

.r9ql7wbrx {
  width: 7px;
  height: 12px;
  x: 14.25px;
  y: 9.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="jx0p6s4hi"/><circle class="ddy7nc0xh"/><rect class="r9ql7wbrx"/><path class="j901znb6t"/></g>`,
		"fallback": "iconoven:demolition-ball",
	});
}

export default Component;
