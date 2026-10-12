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
		"content": `<style>.cd0_ngiry {
  d: path("M9.75 14.25V19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ll1_o99rj {
  d: path("M10.25 9h3.5");
}

.riwk6i32i {
  width: 10.5px;
  height: 9.25px;
  x: 6.75px;
  y: 12px;
  rx: 2px;
}

.u5a392dyr {
  width: 7.5px;
  height: 3.25px;
  x: 8.25px;
  y: 2.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="u5a392dyr"/><path class="ll1_o99rj"/><rect class="riwk6i32i"/><path class="cd0_ngiry"/></g>`,
		"fallback": "iconoven:cologne",
	});
}

export default Component;
