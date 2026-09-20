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
		"content": `<style>.bfcwd7bcm {
  d: path("M13 13a4 4 0 0 1 8 0");
}

.eulyu-bkl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7.5 13.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fevuzkbbx {
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.oibtokbpn {
  fill: currentColor;
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q5drmccbq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 15 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q6kjd1w_g {
  d: path("M7.5 13.83a3.5 3.5 0 1 1 -2.96 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u70k4y_qc {
  d: path("m9 15 5 -5");
}

.w9co6ubnn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 13a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="oibtokbpn"/><path class="eulyu-bkl"/><path class="q5drmccbq"/><path class="w9co6ubnn"/><path class="q6kjd1w_g"/><path class="u70k4y_qc"/><path class="fevuzkbbx"/><path class="bfcwd7bcm"/></g>`,
		"fallback": "iconmind:escalate-human-duotone-bold",
	});
}

export default Component;
