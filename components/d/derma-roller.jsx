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
		"content": `<style>.hpoh1mqlt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 4.5h.01m3.24 0h.01m3.24 0h.01m-4.86 2h.01m3.19 0h.01");
}

.r_epiuuwn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 5.5v5h17.5v-5m-8.75 5v2.25");
}

.v_4fykbly {
  width: 12.5px;
  height: 5.5px;
  x: 5.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.vwgk2bc4e {
  width: 3.5px;
  height: 8.5px;
  x: 10.25px;
  y: 12.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="v_4fykbly"/><path class="hpoh1mqlt"/><path class="r_epiuuwn"/><rect class="vwgk2bc4e"/></g>`,
		"fallback": "iconoven:derma-roller",
	});
}

export default Component;
