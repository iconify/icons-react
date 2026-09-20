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
		"content": `<style>.hj1zripxe {
  d: path("M9 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hv3ppsbji {
  d: path("M11 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.lz5q8mg1w {
  fill: currentColor;
  d: path("M13 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o7w846b2d {
  d: path("M13 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.opq7zkypr {
  fill: currentColor;
  d: path("M7 4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
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

.t_qrvv_4y {
  fill: currentColor;
  d: path("M9 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uxyzhxvwz {
  d: path("M7 12h10");
}

.w2535ybvu {
  fill: currentColor;
  d: path("M11 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yysxkyxdb {
  d: path("M7 4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="opq7zkypr"/><path class="w2535ybvu"/><path class="t_qrvv_4y"/><path class="lz5q8mg1w"/><path class="yysxkyxdb"/><path class="uxyzhxvwz"/><path class="hv3ppsbji"/><path class="hj1zripxe"/><path class="o7w846b2d"/></g>`,
		"fallback": "iconmind:domino-duotone-bold",
	});
}

export default Component;
