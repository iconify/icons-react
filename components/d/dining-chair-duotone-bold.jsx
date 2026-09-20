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
		"content": `<style>.buq39ib_v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 16h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ckxsheb0b {
  d: path("M7 3v10h10V3");
}

.hgue887wt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 3v10h10V3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iyu3ezo0y {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 9h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jpxa8ckgl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 16v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o682nlgep {
  d: path("M17 16v5");
}

.r182r524c {
  d: path("M7 9h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u3jess8hd {
  d: path("M7 16v5");
}

.z22xlf92i {
  d: path("M5 16h14");
}

.zjfipvb-g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 16v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="hgue887wt"/><path class="buq39ib_v"/><path class="jpxa8ckgl"/><path class="zjfipvb-g"/><path class="iyu3ezo0y"/><path class="ckxsheb0b"/><path class="z22xlf92i"/><path class="u3jess8hd"/><path class="o682nlgep"/><path class="r182r524c"/></g>`,
		"fallback": "iconmind:dining-chair-duotone-bold",
	});
}

export default Component;
