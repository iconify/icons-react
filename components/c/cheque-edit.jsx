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
		"content": `<style>.dv8_7nvic {
  d: path("M6.25 9.75h5.5m3.25 0h2.75m-11.5 4.5h3m3.5.5l1.5-2l1.25 2l1.5-2l1.25 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0ojli41q {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="l0ojli41q"/><path class="dv8_7nvic"/></g>`,
		"fallback": "iconoven:cheque-edit",
	});
}

export default Component;
