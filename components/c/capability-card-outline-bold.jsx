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
		"content": `<style>.d3xn50bni {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.gte-olbep {
  d: path("M10 8v3.5");
}

.jz3tcofhe {
  d: path("M14 8v3.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.znz1wcbkt {
  d: path("M8 14a2.5 2.5 0 0 1 2.5 -2.5h3A2.5 2.5 0 0 1 16 14a2.5 2.5 0 0 1 -2.5 2.5h-3A2.5 2.5 0 0 1 8 14");
}
</style><g class="s0phu2bbs"><path class="d3xn50bni"/><path class="znz1wcbkt"/><path class="gte-olbep"/><path class="jz3tcofhe"/></g>`,
		"fallback": "iconmind:capability-card-outline-bold",
	});
}

export default Component;
