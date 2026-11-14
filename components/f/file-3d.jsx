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
		"content": `<style>.baqp76exr {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-6.756 2.425l2 1.143a1.5 1.5 0 0 1 .756 1.302v2.26a1.5 1.5 0 0 1-.756 1.302l-2 1.143a1.5 1.5 0 0 1-1.488 0l-2-1.143A1.5 1.5 0 0 1 8.5 15.63v-2.26a1.5 1.5 0 0 1 .756-1.302l2-1.143a1.5 1.5 0 0 1 1.488 0");
}

.c6ohsi9xo {
  d: path("m8.5 12.5l3.5 2l3.5-2m-3.5 2v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="baqp76exr"/><path class="c6ohsi9xo"/></g>`,
		"fallback": "uix:file-3d",
	});
}

export default Component;
