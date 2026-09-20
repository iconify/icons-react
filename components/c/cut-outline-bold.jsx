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
		"content": `<style>.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fquh7rbnp {
  d: path("M15 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wrcxysbfa {
  d: path("m6 4 11 11");
}

.zae78obsi {
  d: path("M18 4 7 15");
}
</style><g class="s0phu2bbs"><path class="wrcxysbfa"/><path class="zae78obsi"/><path class="du3agkbjb"/><path class="fquh7rbnp"/></g>`,
		"fallback": "iconmind:cut-outline-bold",
	});
}

export default Component;
