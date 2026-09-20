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
		"content": `<style>.cpc3z_b1u {
  fill: currentColor;
  d: path("M17 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dfcdzc65k {
  d: path("M3 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.h_p-57bvu {
  d: path("M19 8v8");
}

.k-8kltbgj {
  fill: currentColor;
  d: path("M17 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kdmnrabtq {
  d: path("M17 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.kwx_mgnfk {
  d: path("M17 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mebjldn5a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.swxhvqb7v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y4k_22w_l {
  d: path("M8 5h8");
}

.zxrob3sge {
  fill: currentColor;
  d: path("M3 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="zxrob3sge"/><path class="k-8kltbgj"/><path class="cpc3z_b1u"/><path class="swxhvqb7v"/><path class="mebjldn5a"/><path class="dfcdzc65k"/><path class="kwx_mgnfk"/><path class="kdmnrabtq"/><path class="y4k_22w_l"/><path class="h_p-57bvu"/></g>`,
		"fallback": "iconmind:crawl-duotone-bold",
	});
}

export default Component;
