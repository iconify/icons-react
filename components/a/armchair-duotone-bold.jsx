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
		"content": `<style>.aghgwx55f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 20v-8h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ehvaisl2i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 20v-8h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gam3cw54g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 16h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hhn28yosy {
  d: path("M21 20v-8h-4");
}

.k-f7ahbzo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 16V5h10v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q1cfkyb_k {
  d: path("M3 20v-8h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xm60vxbgs {
  d: path("M7 16V5h10v11");
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="s0phu2bbs"><path class="k-f7ahbzo"/><path class="gam3cw54g"/><path class="aghgwx55f"/><path class="ehvaisl2i"/><path class="xm60vxbgs"/><path class="ys-dg812g"/><path class="q1cfkyb_k"/><path class="hhn28yosy"/></g>`,
		"fallback": "iconmind:armchair-duotone-bold",
	});
}

export default Component;
