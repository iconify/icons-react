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
		"content": `<style>.cajt03bfr {
  d: path("m4 20 5 -5");
}

.cktduhxcf {
  d: path("M8.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.el3g3frja {
  d: path("m15 9 5 -5");
}

.lsj8eccpk {
  fill: currentColor;
  d: path("M8.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
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
</style><g class="s0phu2bbs"><path class="lsj8eccpk"/><path class="cajt03bfr"/><path class="cktduhxcf"/><path class="el3g3frja"/></g>`,
		"fallback": "iconmind:git-commit-duotone-bold",
	});
}

export default Component;
