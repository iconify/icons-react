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

.uxje_8buy {
  d: path("M5 9.5v11h8.4m5.6-9.2V9.5m-1 12.25L15.75 19a3 3 0 1 1 4.5 0ZM18 17h.01");
}

.z6zf6db1g {
  d: path("m2.5 11.5l9.5-8l9.5 8");
}
</style><g class="hntgybcog"><path class="z6zf6db1g"/><path class="uxje_8buy"/></g>`,
		"fallback": "uix:delivery-address-home",
	});
}

export default Component;
