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
		"content": `<style>.l-nryhbcn {
  fill: currentColor;
  d: path("M15 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lo7kp72nh {
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.m3koyfgfl {
  d: path("M11 8h7");
}

.pfndwmm4f {
  d: path("m15 5 3 3 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wmi7x3_7r {
  d: path("M15 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.yyvm7xbin {
  fill: currentColor;
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yyvm7xbin"/><path class="l-nryhbcn"/><path class="lo7kp72nh"/><path class="wmi7x3_7r"/><path class="m3koyfgfl"/><path class="pfndwmm4f"/></g>`,
		"fallback": "iconmind:handoff-duotone-bold",
	});
}

export default Component;
