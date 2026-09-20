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
		"content": `<style>.emvotkb4z {
  d: path("M4 20 20 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.veo4_yb-t {
  d: path("M6 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.wqwx994ue {
  d: path("M14 10v10");
}

.zqnyy8bad {
  d: path("M13 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="emvotkb4z"/><path class="veo4_yb-t"/><path class="wqwx994ue"/><path class="zqnyy8bad"/></g>`,
		"fallback": "iconmind:fishing-rod-outline-bold",
	});
}

export default Component;
