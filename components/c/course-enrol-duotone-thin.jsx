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
		"content": `<style>.f_l0dxb0l {
  fill: currentColor;
  d: path("m13 16 6 -6 2 2 -6 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gtov5m4ly {
  d: path("m13 16 6 -6 2 2 -6 6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kpspt_bpo {
  d: path("M7 8h10");
}

.p8yct170k {
  d: path("M7 12h6");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.zyr0_hpav {
  fill: currentColor;
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zyr0_hpav"/><path class="f_l0dxb0l"/><path class="y4_6s7b5v"/><path class="kpspt_bpo"/><path class="p8yct170k"/><path class="gtov5m4ly"/></g>`,
		"fallback": "iconmind:course-enrol-duotone-thin",
	});
}

export default Component;
