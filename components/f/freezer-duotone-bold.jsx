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
		"content": `<style>.egcehhe1t {
  fill: currentColor;
  d: path("m12 5 3.5 3.5L12 12 8.5 8.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hldvl9bwi {
  d: path("m12 5 3.5 3.5L12 12 8.5 8.5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tkn_9lu9q {
  d: path("M5 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.xmopbdc-t {
  d: path("M5 15h14");
}

.yn64c1dsb {
  fill: currentColor;
  d: path("M5 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yn64c1dsb"/><path class="egcehhe1t"/><path class="tkn_9lu9q"/><path class="xmopbdc-t"/><path class="hldvl9bwi"/></g>`,
		"fallback": "iconmind:freezer-duotone-bold",
	});
}

export default Component;
