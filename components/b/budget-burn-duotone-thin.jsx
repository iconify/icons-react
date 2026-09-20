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
		"content": `<style>.as3wwwxhg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 16h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.earhjk-cy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m2_htfbkw {
  d: path("m17 16 4 4");
}

.putgnkb9b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 11h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qh24w7gnj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m17 16 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sql450bon {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 17v3h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u_m1dmgxz {
  d: path("M3 16h10");
}

.vwjblmbrl {
  d: path("M21 17v3h-3");
}

.w8fmvxwit {
  d: path("M3 11h14");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="hntgybcog"><path class="earhjk-cy"/><path class="putgnkb9b"/><path class="as3wwwxhg"/><path class="qh24w7gnj"/><path class="sql450bon"/><path class="xgrfb-bqu"/><path class="w8fmvxwit"/><path class="u_m1dmgxz"/><path class="m2_htfbkw"/><path class="vwjblmbrl"/></g>`,
		"fallback": "iconmind:budget-burn-duotone-thin",
	});
}

export default Component;
