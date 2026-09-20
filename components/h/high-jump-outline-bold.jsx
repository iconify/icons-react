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
		"content": `<style>.m1mjigbsi {
  d: path("M4 8h16");
}

.ml3aqbbkk {
  d: path("M4 8v12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t1tm72bkp {
  d: path("M20 8v12");
}

.zyvg9rbxb {
  d: path("M6 15c2 -7 10 -7 12 0");
}
</style><g class="s0phu2bbs"><path class="m1mjigbsi"/><path class="ml3aqbbkk"/><path class="t1tm72bkp"/><path class="zyvg9rbxb"/></g>`,
		"fallback": "iconmind:high-jump-outline-bold",
	});
}

export default Component;
