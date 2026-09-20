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
		"content": `<style>.f-t_rcb_j {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.l-37rlmum {
  d: path("m17 18 3 3");
}

.m-3gekbbg {
  d: path("M12 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.mlhk78k2d {
  d: path("M5 8h14");
}

.s6fwi8pmt {
  fill: currentColor;
  d: path("M12 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wh4xgnrmo {
  d: path("M5 12h10");
}
</style><g class="hntgybcog"><path class="f-t_rcb_j"/><path class="s6fwi8pmt"/><path class="k6fi9qmtq"/><path class="mlhk78k2d"/><path class="wh4xgnrmo"/><path class="m-3gekbbg"/><path class="l-37rlmum"/></g>`,
		"fallback": "iconmind:full-text-index-duotone-thin",
	});
}

export default Component;
