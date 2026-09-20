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
		"content": `<style>.cnjkjfbvs {
  d: path("M3 5v14h18V5Z");
}

.onn_u5lbx {
  d: path("m7 12 3 3 6 -6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uto0n9pso {
  d: path("M7 16h10");
}

.ybjj6ac-t {
  fill: currentColor;
  d: path("M3 5v14h18V5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ybjj6ac-t"/><path class="cnjkjfbvs"/><path class="onn_u5lbx"/><path class="uto0n9pso"/></g>`,
		"fallback": "iconmind:event-review-duotone-bold",
	});
}

export default Component;
