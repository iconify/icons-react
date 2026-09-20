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
		"content": `<style>.g-g6w6buq {
  d: path("M7 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.guoi_acnp {
  fill: currentColor;
  d: path("M7 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8v_p1wrt {
  fill: currentColor;
  d: path("M15 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kdc5y_bms {
  fill: currentColor;
  d: path("M3 4h6v14H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.maf2tbbex {
  d: path("M15 4h6v14h-6Z");
}

.me7c_bbry {
  d: path("M15 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.oviqrkboq {
  d: path("M3 4h6v14H3Z");
}

.qfclk5djd {
  fill: currentColor;
  d: path("M15 4h6v14h-6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="kdc5y_bms"/><path class="qfclk5djd"/><path class="guoi_acnp"/><path class="j8v_p1wrt"/><path class="oviqrkboq"/><path class="maf2tbbex"/><path class="oqfv9rb9x"/><path class="g-g6w6buq"/><path class="me7c_bbry"/></g>`,
		"fallback": "iconmind:hallway-duotone-thin",
	});
}

export default Component;
