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
		"content": `<style>.gizk7zb8c {
  d: path("M4.5 12V5.75A2.5 2.5 0 0 1 7 3.25h10a2.5 2.5 0 0 1 2.5 2.5V12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u_hqpzbnr {
  width: 9px;
  height: 2.5px;
  x: 7.5px;
  y: 6.5px;
  rx: 1.25px;
}

.vai_3cb-o {
  width: 18.5px;
  height: 5.5px;
  x: 2.75px;
  y: 12px;
  rx: 1.5px;
}

.zazonob0v {
  d: path("M4.5 17.5v3.75m15-3.75v3.75");
}
</style><g class="hntgybcog"><path class="gizk7zb8c"/><rect class="u_hqpzbnr"/><rect class="vai_3cb-o"/><path class="zazonob0v"/></g>`,
		"fallback": "iconoven:bed-hotel",
	});
}

export default Component;
