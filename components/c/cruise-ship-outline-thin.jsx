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

.j2rh_abzz {
  d: path("M5 15v-4h14v4");
}

.lo13e1bkv {
  d: path("M9 11V7h7v4");
}

.r0ugme01d {
  d: path("M2 15h20l-5 5H7Z");
}

.x212dunwb {
  d: path("M11 7V3h3v4");
}
</style><g class="hntgybcog"><path class="r0ugme01d"/><path class="j2rh_abzz"/><path class="lo13e1bkv"/><path class="x212dunwb"/></g>`,
		"fallback": "iconmind:cruise-ship-outline-thin",
	});
}

export default Component;
