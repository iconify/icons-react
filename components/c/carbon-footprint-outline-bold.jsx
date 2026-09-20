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
		"content": `<style>.awxqv1b4c {
  d: path("M17 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.jdxsdlola {
  d: path("M14 3.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k44ucwlod {
  d: path("M7 11a5 5 0 0 1 10 0v6a5 5 0 0 1 -10 0Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tgth1rbuy {
  d: path("M6 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.wxng3f21w {
  d: path("M10 3.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="k44ucwlod"/><path class="tgth1rbuy"/><path class="wxng3f21w"/><path class="jdxsdlola"/><path class="awxqv1b4c"/></g>`,
		"fallback": "iconmind:carbon-footprint-outline-bold",
	});
}

export default Component;
