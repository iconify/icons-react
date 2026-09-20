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
		"content": `<style>.goqqd75_r {
  d: path("M20 4v5");
}

.hlt9oudyd {
  d: path("M15 9v7");
}

.ig8k5lhpw {
  d: path("M10 11v5");
}

.mhczqob3l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 11v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nt8ufs66i {
  d: path("M5 6v5");
}

.qa47plb1f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M20 4v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qoyxknbjl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 9v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u8rvgzb_f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 6v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="u8rvgzb_f"/><path class="mhczqob3l"/><path class="qoyxknbjl"/><path class="qa47plb1f"/><path class="nt8ufs66i"/><path class="ig8k5lhpw"/><path class="hlt9oudyd"/><path class="goqqd75_r"/></g>`,
		"fallback": "iconmind:chart-waterfall-duotone-bold",
	});
}

export default Component;
