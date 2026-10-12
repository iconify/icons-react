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

.no7ya_sep {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 7.25px;
  rx: 2.5px;
}

.nst5q0sxj {
  width: 4px;
  height: 3px;
  x: 5px;
  y: 4.25px;
  rx: 1px;
}

.w4wqpfbkp {
  cx: 14.75px;
  cy: 13.5px;
  r: 3.5px;
}

.xqntkvdws {
  d: path("M5.75 10.5h2.5");
}
</style><g class="hntgybcog"><rect class="no7ya_sep"/><rect class="nst5q0sxj"/><circle class="w4wqpfbkp"/><path class="xqntkvdws"/></g>`,
		"fallback": "iconoven:camera-compact",
	});
}

export default Component;
