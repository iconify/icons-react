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
		"content": `<style>.nn3ozybvv {
  cx: 9px;
  cy: 9px;
  r: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o4wg1hbdk {
  cx: 15px;
  cy: 15px;
  r: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.siye_hbox {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 13.5h.01m3.99 0h.01M15 16.75h.01");
}

.ugn80746j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.25 7.5h.01M9 5.75h.01M6.25 11h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="nn3ozybvv"/><path class="ugn80746j"/><circle class="o4wg1hbdk"/><path class="siye_hbox"/></g>`,
		"fallback": "iconoven:cotton-pads",
	});
}

export default Component;
