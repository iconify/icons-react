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
		"content": `<style>.f2m4wubik {
  d: path("M13 12h8");
}

.ft030md1w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iv5my9b7c {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18.5 9.5 21 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jcchxv_7i {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17.5 16.5 15 19l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lj1r89b9d {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 19h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qyl16slsb {
  d: path("M17.5 16.5 15 19l2.5 2.5");
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.u4kp6lp9x {
  d: path("M15 19h6");
}

.z7e_phf6k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zl61012kd {
  d: path("M18.5 9.5 21 12l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="ft030md1w"/><path class="z7e_phf6k"/><path class="iv5my9b7c"/><path class="lj1r89b9d"/><path class="jcchxv_7i"/><path class="skbifdbcx"/><path class="f2m4wubik"/><path class="zl61012kd"/><path class="u4kp6lp9x"/><path class="qyl16slsb"/></g>`,
		"fallback": "iconmind:agent-sync-duotone-thin",
	});
}

export default Component;
