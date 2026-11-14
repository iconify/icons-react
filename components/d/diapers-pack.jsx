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

.ti6l08b3y {
  d: path("M7.375 5.5h9.25A4.375 4.375 0 0 1 21 9.875v6.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 16.125v-6.25A4.375 4.375 0 0 1 7.375 5.5M15 5.5V3h3.5v2.5");
}

.v4dm87blb {
  d: path("M7.5 9.5h9V12q-2.5.5-3.25 4h-2.5Q10 12.5 7.5 12Z");
}
</style><g class="hntgybcog"><path class="ti6l08b3y"/><path class="v4dm87blb"/></g>`,
		"fallback": "uix:diapers-pack",
	});
}

export default Component;
