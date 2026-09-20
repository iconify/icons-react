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
		"content": `<style>.c6_1lkb2d {
  d: path("m14 13.5 -4 4");
}

.cu26jmb_i {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j6apg33fy {
  d: path("M16 2.5V5");
}

.qaa4bo00g {
  d: path("M8 2.5V5");
}

.r68i47b4w {
  d: path("m10 13.5 4 4");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="hntgybcog"><path class="cu26jmb_i"/><path class="x50q_4bdr"/><path class="qaa4bo00g"/><path class="j6apg33fy"/><path class="r68i47b4w"/><path class="c6_1lkb2d"/></g>`,
		"fallback": "iconmind:booking-cancel-outline-thin",
	});
}

export default Component;
