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

.ho-6xzyxe {
  d: path("m5 4l1.171.585A1.5 1.5 0 0 1 7 5.927v12.646a1.5 1.5 0 0 1-.829 1.342L5 20.5a1.382 1.382 0 0 1-2-1.236V5.236A1.382 1.382 0 0 1 5 4m4.75 11.75h1.5m-1.5 3h1.5m3-.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25-.5v1");
}

.le72v5b1z {
  d: path("M3 21.5V3h11v10.3");
}
</style><g class="hntgybcog"><path class="le72v5b1z"/><path class="ho-6xzyxe"/></g>`,
		"fallback": "uix:final-paycheck",
	});
}

export default Component;
