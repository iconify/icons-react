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
		"content": `<style>.g6e5e7bhp {
  d: path("m2 8 6 6 6 -6 6 6");
}

.ng7_l5bbi {
  d: path("m6 4 4 4");
}

.p4c11pbyi {
  d: path("m2 15 6 6 6 -6 6 6");
}

.qgimpuszh {
  d: path("m14 4 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="g6e5e7bhp"/><path class="p4c11pbyi"/><path class="ng7_l5bbi"/><path class="qgimpuszh"/></g>`,
		"fallback": "iconmind:glacier-outline-bold",
	});
}

export default Component;
