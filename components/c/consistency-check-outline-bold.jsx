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
		"content": `<style>.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.mo1bh2_2m {
  d: path("M9 12.5h6");
}

.o40l0bbgl {
  d: path("M9 8.5h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}
</style><g class="s0phu2bbs"><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="o40l0bbgl"/><path class="mo1bh2_2m"/></g>`,
		"fallback": "iconmind:consistency-check-outline-bold",
	});
}

export default Component;
