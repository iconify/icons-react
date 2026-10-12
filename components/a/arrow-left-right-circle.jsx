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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.om4wibpjj {
  d: path("M16 12H8.5m3.25-3.5L8.25 12l3.5 3.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="om4wibpjj"/></g>`,
		"fallback": "iconoven:arrow-left-right-circle",
	});
}

export default Component;
