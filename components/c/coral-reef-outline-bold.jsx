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
		"content": `<style>.axphtybjp {
  d: path("M15 21V9l-3 -3");
}

.bos0j4biy {
  d: path("M3 21h18");
}

.gdxs68qsm {
  d: path("M7 21v-9L4 9");
}

.r1wy_ibgj {
  d: path("m15 13 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.utps5obsq {
  d: path("m7 15 4 -4");
}
</style><g class="s0phu2bbs"><path class="gdxs68qsm"/><path class="utps5obsq"/><path class="axphtybjp"/><path class="r1wy_ibgj"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:coral-reef-outline-bold",
	});
}

export default Component;
