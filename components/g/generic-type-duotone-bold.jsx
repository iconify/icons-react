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
		"content": `<style>.hpthd_boc {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.r1tpzrwqw {
  fill: currentColor;
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
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

.sd1y64b7x {
  d: path("m10 9.5 -2 2 2 2");
}

.yduo6fb6m {
  d: path("m14 9.5 2 2 -2 2");
}
</style><g class="s0phu2bbs"><path class="r1tpzrwqw"/><path class="hpthd_boc"/><path class="sd1y64b7x"/><path class="yduo6fb6m"/></g>`,
		"fallback": "iconmind:generic-type-duotone-bold",
	});
}

export default Component;
