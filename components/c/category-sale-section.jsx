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
		"content": `<style>.ec-sy5buu {
  d: path("M5.625 3h4.788a2.63 2.63 0 0 1 1.856.769l6.875 6.875a2.625 2.625 0 0 1 0 3.712l-4.788 4.788a2.625 2.625 0 0 1-3.712 0l-6.875-6.875A2.63 2.63 0 0 1 3 10.413V5.625A2.625 2.625 0 0 1 5.625 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r1p0stjsq {
  d: path("M6.25 7.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M7.5 12L12 7.5m-4.5 0h.01m4.99 5h.01");
}
</style><g class="hntgybcog"><path class="ec-sy5buu"/><path class="r1p0stjsq"/></g>`,
		"fallback": "uix:category-sale-section",
	});
}

export default Component;
