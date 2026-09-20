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
		"content": `<style>.brxc3ob5g {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18.5 9.5 21 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f2m4wubik {
  d: path("M13 12h8");
}

.hce7vhblx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 19h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kosxb-loy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
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

.vo6ambcdr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17.5 16.5 15 19l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vtcxv5brk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zl61012kd {
  d: path("M18.5 9.5 21 12l-2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="kosxb-loy"/><path class="vtcxv5brk"/><path class="brxc3ob5g"/><path class="hce7vhblx"/><path class="vo6ambcdr"/><path class="skbifdbcx"/><path class="f2m4wubik"/><path class="zl61012kd"/><path class="u4kp6lp9x"/><path class="qyl16slsb"/></g>`,
		"fallback": "iconmind:agent-sync-duotone-regular",
	});
}

export default Component;
