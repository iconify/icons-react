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
		"content": `<style>.a4ea1f79x {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 17v3h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h8-vgq6xq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 16h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i4ln5bb6z {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 11h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.khksl7boy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m2_htfbkw {
  d: path("m17 16 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u_m1dmgxz {
  d: path("M3 16h10");
}

.u7o5tgb4b {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m17 16 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
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
</style><g class="s0phu2bbs"><path class="khksl7boy"/><path class="i4ln5bb6z"/><path class="h8-vgq6xq"/><path class="u7o5tgb4b"/><path class="a4ea1f79x"/><path class="xgrfb-bqu"/><path class="w8fmvxwit"/><path class="u_m1dmgxz"/><path class="m2_htfbkw"/><path class="vwjblmbrl"/></g>`,
		"fallback": "iconmind:budget-burn-duotone-bold",
	});
}

export default Component;
