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
		"content": `<style>.fnf6pdbdu {
  d: path("M12 3v6");
}

.m91it7bsg {
  d: path("M9 20h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sgr_j7bvk {
  d: path("M8 3h8");
}

.vd0qhnbhi {
  fill: currentColor;
  d: path("M5 16a7 7 0 0 1 14 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xlnt5q--z {
  d: path("M5 16a7 7 0 0 1 14 0Z");
}
</style><g class="s0phu2bbs"><path class="vd0qhnbhi"/><path class="sgr_j7bvk"/><path class="fnf6pdbdu"/><path class="xlnt5q--z"/><path class="m91it7bsg"/></g>`,
		"fallback": "iconmind:ceiling-light-duotone-bold",
	});
}

export default Component;
