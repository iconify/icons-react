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
		"content": `<style>.btdmtu_xg {
  d: path("M14 5v14");
}

.rpanz4bot {
  fill: currentColor;
  d: path("m15 16 4 -4 2 2 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t9z-q_-wf {
  d: path("m15 16 4 -4 2 2 -4 4Z");
}

.wg8_ddc1f {
  d: path("M6 12h6");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.zaehmnb6i {
  d: path("M6 8h6");
}

.zyr0_hpav {
  fill: currentColor;
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="zyr0_hpav"/><path class="rpanz4bot"/><path class="y4_6s7b5v"/><path class="btdmtu_xg"/><path class="zaehmnb6i"/><path class="wg8_ddc1f"/><path class="t9z-q_-wf"/></g>`,
		"fallback": "iconmind:annotate-duotone-bold",
	});
}

export default Component;
