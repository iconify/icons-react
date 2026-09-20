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
		"content": `<style>.gg9qhlhxo {
  d: path("M8 4v16");
}

.pa1ot6bmg {
  d: path("M16 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v5g-gqbwm {
  d: path("m4 16 4 4 4 -4");
}

.wm_1lkfim {
  d: path("m12 8 4 -4 4 4");
}
</style><g class="s0phu2bbs"><path class="gg9qhlhxo"/><path class="v5g-gqbwm"/><path class="pa1ot6bmg"/><path class="wm_1lkfim"/></g>`,
		"fallback": "iconmind:arrow-down-up-outline-bold",
	});
}

export default Component;
