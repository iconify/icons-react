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

.it38sin7q {
  d: path("M7.5 12h8.75M12.5 8.25L16.25 12l-3.75 3.75");
}

.t0jrdmbrp {
  width: 17.5px;
  height: 17.5px;
  x: 3.25px;
  y: 3.25px;
  rx: 4px;
}
</style><g class="hntgybcog"><rect class="t0jrdmbrp"/><path class="it38sin7q"/></g>`,
		"fallback": "iconoven:arrow-right-square",
	});
}

export default Component;
