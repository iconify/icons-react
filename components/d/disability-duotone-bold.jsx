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
		"content": `<style>.mk93lqrnh {
  d: path("M7 8v6");
}

.ngmxa3mzr {
  fill: currentColor;
  d: path("M4 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rm1tb6aya {
  d: path("M4 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.rpjwsjb7m {
  d: path("M16 11h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.scp1py_mj {
  d: path("m2 19 5 -5 5 5");
}

.yzvng5w1c {
  d: path("M16 7v13");
}
</style><g class="s0phu2bbs"><path class="ngmxa3mzr"/><path class="rm1tb6aya"/><path class="mk93lqrnh"/><path class="scp1py_mj"/><path class="yzvng5w1c"/><path class="rpjwsjb7m"/></g>`,
		"fallback": "iconmind:disability-duotone-bold",
	});
}

export default Component;
