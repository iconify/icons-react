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
		"content": `<style>.cq8v-ibqh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.em798y7rn {
  d: path("M6 12h14");
}

.gzvvr_cib {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.ndk47rb8x {
  d: path("M8 3c6 3 6 15 0 18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t_57glb-y {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m17 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wuvisubmw {
  d: path("M8 3v18");
}

.y8q092blq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 3c6 3 6 15 0 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="y8q092blq"/><path class="cq8v-ibqh"/><path class="gzvvr_cib"/><path class="t_57glb-y"/><path class="ndk47rb8x"/><path class="wuvisubmw"/><path class="em798y7rn"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:archery-duotone-bold",
	});
}

export default Component;
