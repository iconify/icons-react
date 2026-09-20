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
		"content": `<style>.fgk90dbkb {
  fill: currentColor;
  d: path("m12 8 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x7bkced7s {
  d: path("m12 8 2 2 -2 2 -2 -2Z");
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="s0phu2bbs"><path class="fgk90dbkb"/><path class="ng35sb6yg"/><path class="ys-dg812g"/><path class="x7bkced7s"/></g>`,
		"fallback": "iconmind:credit-score-duotone-bold",
	});
}

export default Component;
