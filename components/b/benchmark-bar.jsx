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
		"content": `<style>.a0z7u_b4k {
  width: 4px;
  height: 11.5px;
  x: 10px;
  y: 9.25px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.owuauzbqc {
  width: 4px;
  height: 7.5px;
  x: 3.25px;
  y: 13.25px;
  rx: 1.25px;
}

.qych-cc0m {
  width: 4px;
  height: 9px;
  x: 16.75px;
  y: 11.75px;
  rx: 1.25px;
}

.tcj8xqrkg {
  d: path("M2.75 5.25h2.5m2.85 0h2.5m2.8 0h2.5m2.85 0h2.5");
}
</style><g class="hntgybcog"><rect class="owuauzbqc"/><rect class="a0z7u_b4k"/><rect class="qych-cc0m"/><path class="tcj8xqrkg"/></g>`,
		"fallback": "iconoven:benchmark-bar",
	});
}

export default Component;
