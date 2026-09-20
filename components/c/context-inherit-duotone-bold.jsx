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
		"content": `<style>.p21fay12m {
  d: path("M8.5 15a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.r3zr3vb2d {
  fill: currentColor;
  d: path("M8.5 15a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uy91f4czm {
  d: path("M13.69 2.37a4 4 0 1 1 -3.38 0");
}

.xios20bld {
  d: path("M12 10v3");
}
</style><g class="s0phu2bbs"><path class="r3zr3vb2d"/><path class="uy91f4czm"/><path class="xios20bld"/><path class="p21fay12m"/></g>`,
		"fallback": "iconmind:context-inherit-duotone-bold",
	});
}

export default Component;
