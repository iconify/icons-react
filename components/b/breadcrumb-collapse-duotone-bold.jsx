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
		"content": `<style>.b1gzncccy {
  fill: currentColor;
  d: path("M13 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i-zd2i_hi {
  d: path("M3 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.kz0kcyi2y {
  d: path("m17 8 4 4 -4 4");
}

.lgr612izs {
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s4ceatb9m {
  d: path("M13 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.wwnijrnro {
  fill: currentColor;
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x1tpcg94j {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m17 8 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ys1yigyvq {
  fill: currentColor;
  d: path("M3 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ys1yigyvq"/><path class="wwnijrnro"/><path class="b1gzncccy"/><path class="x1tpcg94j"/><path class="i-zd2i_hi"/><path class="lgr612izs"/><path class="s4ceatb9m"/><path class="kz0kcyi2y"/></g>`,
		"fallback": "iconmind:breadcrumb-collapse-duotone-bold",
	});
}

export default Component;
