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
		"content": `<style>.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pev_t0bpq {
  d: path("M7.5 4H5v16h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vdp61xcuu {
  d: path("M16.5 4H19v16h-2.5");
}
</style><g class="s0phu2bbs"><path class="pev_t0bpq"/><path class="vdp61xcuu"/><path class="enrpg0aoq"/></g>`,
		"fallback": "iconmind:atomic-op-outline-bold",
	});
}

export default Component;
