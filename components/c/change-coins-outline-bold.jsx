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
		"content": `<style>.gae_-ztyd {
  d: path("M13.5 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.lvh9_ibac {
  d: path("M8.5 7.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.quhyyobjk {
  d: path("M2.5 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="lvh9_ibac"/><path class="quhyyobjk"/><path class="gae_-ztyd"/></g>`,
		"fallback": "iconmind:change-coins-outline-bold",
	});
}

export default Component;
