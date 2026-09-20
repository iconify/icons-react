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
		"content": `<style>.d0fwwgmbl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10.5 12H17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fgef0hcge {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iedujiqkb {
  d: path("M7 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.naa67qbfw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nw8-8vb0d {
  fill: currentColor;
  d: path("M7 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ognhgbb3v {
  d: path("M10.5 12H17");
}

.ppivcbbzp {
  d: path("M5 4v16");
}

.pz3wsjbwy {
  d: path("M14.5 9.5 17 12l-2.5 2.5");
}

.rdihygobp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14.5 9.5 17 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3rq50btb {
  d: path("M19 4v16");
}
</style><g class="s0phu2bbs"><path class="nw8-8vb0d"/><path class="naa67qbfw"/><path class="fgef0hcge"/><path class="d0fwwgmbl"/><path class="rdihygobp"/><path class="ppivcbbzp"/><path class="t3rq50btb"/><path class="iedujiqkb"/><path class="ognhgbb3v"/><path class="pz3wsjbwy"/></g>`,
		"fallback": "iconmind:guardrail-output-duotone-bold",
	});
}

export default Component;
