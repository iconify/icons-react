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
		"content": `<style>.b9ex0_kla {
  d: path("M6 16h6");
}

.fhi210b_d {
  d: path("M13 5v14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uc661cbro {
  d: path("M15 10h4");
}

.wg8_ddc1f {
  d: path("M6 12h6");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.zaehmnb6i {
  d: path("M6 8h6");
}
</style><g class="s0phu2bbs"><path class="y4_6s7b5v"/><path class="fhi210b_d"/><path class="zaehmnb6i"/><path class="wg8_ddc1f"/><path class="b9ex0_kla"/><path class="uc661cbro"/></g>`,
		"fallback": "iconmind:book-index-outline-bold",
	});
}

export default Component;
