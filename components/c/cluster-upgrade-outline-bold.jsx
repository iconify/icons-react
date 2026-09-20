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
		"content": `<style>.lx4-k4b5b {
  d: path("M17.5 15v6");
}

.qarcjib7d {
  d: path("M14 6a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w269bwb_t {
  d: path("m15 17.5 2.5 -2.5 2.5 2.5");
}

.yhswpf2nj {
  d: path("M4 6a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.z1gyoabnz {
  d: path("M4 16a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="yhswpf2nj"/><path class="qarcjib7d"/><path class="z1gyoabnz"/><path class="lx4-k4b5b"/><path class="w269bwb_t"/></g>`,
		"fallback": "iconmind:cluster-upgrade-outline-bold",
	});
}

export default Component;
