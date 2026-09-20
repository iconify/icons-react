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
		"content": `<style>.hcn7bdzwu {
  d: path("M15 11v7");
}

.i-xxtdbfm {
  d: path("M9 11v7");
}

.m1mjigbsi {
  d: path("M4 8h16");
}

.r-3ib9fxz {
  d: path("M12 11v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
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
</style><g class="s0phu2bbs"><path class="zyr0_hpav"/><path class="y4_6s7b5v"/><path class="m1mjigbsi"/><path class="i-xxtdbfm"/><path class="r-3ib9fxz"/><path class="hcn7bdzwu"/></g>`,
		"fallback": "iconmind:dishwasher-duotone-bold",
	});
}

export default Component;
