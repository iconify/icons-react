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
		"content": `<style>.ew7bcuc4w {
  d: path("M13.5 6.5 18 11");
}

.jzeve79sx {
  fill: currentColor;
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mjolzzblm {
  fill: currentColor;
  d: path("M17 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.on0qv5szw {
  d: path("M2 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.qmhkuacxl {
  d: path("M17 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rz466126m {
  d: path("M10.5 6.5 6 11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t_3t7fbzp {
  fill: currentColor;
  d: path("M2 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="jzeve79sx"/><path class="t_3t7fbzp"/><path class="mjolzzblm"/><path class="ymw3aibdo"/><path class="rz466126m"/><path class="ew7bcuc4w"/><path class="on0qv5szw"/><path class="qmhkuacxl"/></g>`,
		"fallback": "iconmind:experiment-arm-duotone-bold",
	});
}

export default Component;
