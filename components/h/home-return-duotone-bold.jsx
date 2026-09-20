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
		"content": `<style>.bi_xabb2f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 12v8h10v-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f7p-qpb9c {
  d: path("m3 12 7 -7 7 7");
}

.j_t6_obaj {
  d: path("M18.5 13.5 16 16l2.5 2.5");
}

.kli3glbmv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 12 7 -7 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l_8gstgbb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 16h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lveb61hbp {
  d: path("M16 16h6");
}

.rfp-q_b_z {
  d: path("M5 12v8h10v-8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s17txhb_s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18.5 13.5 16 16l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="kli3glbmv"/><path class="bi_xabb2f"/><path class="l_8gstgbb"/><path class="s17txhb_s"/><path class="f7p-qpb9c"/><path class="rfp-q_b_z"/><path class="lveb61hbp"/><path class="j_t6_obaj"/></g>`,
		"fallback": "iconmind:home-return-duotone-bold",
	});
}

export default Component;
