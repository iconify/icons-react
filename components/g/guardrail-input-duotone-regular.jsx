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
		"content": `<style>.a-9s6wb0y {
  d: path("M15 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ajw5g_mzy {
  d: path("M10.5 9.5 13 12l-2.5 2.5");
}

.cxo2jiicg {
  fill: currentColor;
  d: path("M15 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dbfzjzb3n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.its1e1bwq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jaml3ccon {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10.5 9.5 13 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p8yct170k {
  d: path("M7 12h6");
}

.ppivcbbzp {
  d: path("M5 4v16");
}

.t3rq50btb {
  d: path("M19 4v16");
}

.zls5rf_kj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="cxo2jiicg"/><path class="its1e1bwq"/><path class="dbfzjzb3n"/><path class="zls5rf_kj"/><path class="jaml3ccon"/><path class="ppivcbbzp"/><path class="t3rq50btb"/><path class="p8yct170k"/><path class="ajw5g_mzy"/><path class="a-9s6wb0y"/></g>`,
		"fallback": "iconmind:guardrail-input-duotone-regular",
	});
}

export default Component;
