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
		"content": `<style>.askgmhbjk {
  d: path("M3 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bfi7-obrv {
  d: path("M9.5 11.5 12 14l2.5 -2.5");
}

.bfyr8ibhk {
  fill: currentColor;
  d: path("M9 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hh5c5wgme {
  d: path("M15 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.izqnth1lx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 11.5 12 14l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jgk39zb1b {
  d: path("M4 18.5h16");
}

.o2fuczn9e {
  fill: currentColor;
  d: path("M15 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.po3ky8ubk {
  fill: currentColor;
  d: path("M3 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pr8_q1bje {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 18.5h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rwqrrdbai {
  d: path("M9 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="po3ky8ubk"/><path class="bfyr8ibhk"/><path class="o2fuczn9e"/><path class="izqnth1lx"/><path class="pr8_q1bje"/><path class="askgmhbjk"/><path class="rwqrrdbai"/><path class="hh5c5wgme"/><path class="bfi7-obrv"/><path class="jgk39zb1b"/></g>`,
		"fallback": "iconmind:detokenize-duotone-thin",
	});
}

export default Component;
