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

.n-059ea3n {
  d: path("M5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.olmwgycdy {
  d: path("M15 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tbr--mb3k {
  fill: currentColor;
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.unova7b3b {
  fill: currentColor;
  d: path("M15 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xedmbxbzm {
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ybjj6ac-t {
  fill: currentColor;
  d: path("M3 5v14h18V5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.znztjab3f {
  fill: currentColor;
  d: path("M5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ybjj6ac-t"/><path class="znztjab3f"/><path class="tbr--mb3k"/><path class="unova7b3b"/><path class="cnjkjfbvs"/><path class="n-059ea3n"/><path class="xedmbxbzm"/><path class="olmwgycdy"/></g>`,
		"fallback": "iconmind:group-photo-duotone-bold",
	});
}

export default Component;
