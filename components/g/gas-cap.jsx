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

.nr3vuui2s {
  width: 14px;
  height: 14px;
  x: 5px;
  y: 5px;
  rx: 3px;
}

.o5__hii-l {
  cx: 12px;
  cy: 12px;
  r: 4.5px;
}

.sjqi1-x_i {
  d: path("M5 9.5H2.75v5H5");
}

.zkiplcnjf {
  d: path("M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><g class="hntgybcog"><rect class="nr3vuui2s"/><path class="sjqi1-x_i"/><circle class="o5__hii-l"/><path class="zkiplcnjf"/></g>`,
		"fallback": "iconoven:gas-cap",
	});
}

export default Component;
