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
		"content": `<style>.dzbcwvq-w {
  d: path("M3 16v-4h16v4Z");
}

.gv5aqrbwu {
  d: path("M7 21h8");
}

.itq_ntb3g {
  d: path("M11 16v5");
}

.k5fdplbdv {
  fill: currentColor;
  d: path("M3 16v-4h16v4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n53lfdc0t {
  d: path("M16 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nkn0m9bqe {
  fill: currentColor;
  d: path("M16 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pkt304bvs {
  d: path("M19 8v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k5fdplbdv"/><path class="nkn0m9bqe"/><path class="dzbcwvq-w"/><path class="itq_ntb3g"/><path class="gv5aqrbwu"/><path class="n53lfdc0t"/><path class="pkt304bvs"/></g>`,
		"fallback": "iconmind:dentist-chair-duotone-bold",
	});
}

export default Component;
