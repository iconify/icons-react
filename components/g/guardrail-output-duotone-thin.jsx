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
		"content": `<style>.d3ny4vbkv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14.5 9.5 17 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fd6ew5pzp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10.5 12H17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iedujiqkb {
  d: path("M7 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.leef4tbvz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrmo-yb4e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
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

.t3rq50btb {
  d: path("M19 4v16");
}
</style><g class="hntgybcog"><path class="nw8-8vb0d"/><path class="nrmo-yb4e"/><path class="leef4tbvz"/><path class="fd6ew5pzp"/><path class="d3ny4vbkv"/><path class="ppivcbbzp"/><path class="t3rq50btb"/><path class="iedujiqkb"/><path class="ognhgbb3v"/><path class="pz3wsjbwy"/></g>`,
		"fallback": "iconmind:guardrail-output-duotone-thin",
	});
}

export default Component;
