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
		"content": `<style>.em9cvctqt {
  cx: 12px;
  cy: 15px;
  r: 3.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rmp9w4b7v {
  d: path("M7 6h10M7 9.5h6");
}

.ux464eb-x {
  d: path("M8.75 15h6.5M12 11.75a6.5 6.5 0 0 0 0 6.5");
}

.wkg5_f5aq {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="wkg5_f5aq"/><path class="rmp9w4b7v"/><circle class="em9cvctqt"/><path class="ux464eb-x"/></g>`,
		"fallback": "iconoven:customs-declaration",
	});
}

export default Component;
