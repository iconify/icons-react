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
		"content": `<style>.b842d4b5v {
  fill: currentColor;
  d: path("M14 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.bd3-a5q0s {
  d: path("M6 18 18 6");
}

.c4o3x9bhp {
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.jlgxzd_ny {
  fill: currentColor;
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.leql65bnu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 18 18 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w9g5wtasy {
  d: path("M14 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.yxjvqtiry {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="jlgxzd_ny"/><path class="b842d4b5v"/><path class="yxjvqtiry"/><path class="leql65bnu"/><path class="qe97cg-lx"/><path class="bd3-a5q0s"/><path class="c4o3x9bhp"/><path class="w9g5wtasy"/></g>`,
		"fallback": "iconmind:calibration-duotone-bold",
	});
}

export default Component;
