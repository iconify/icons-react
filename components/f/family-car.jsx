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
		"content": `<style>.ay165rc5y {
  cx: 17px;
  cy: 19.25px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpb8zwbqv {
  d: path("m12 12.75l-1.6-1.55A1.05 1.05 0 0 1 12 9.85a1.05 1.05 0 0 1 1.6 1.35Z");
}

.rqad3rgfm {
  cx: 7px;
  cy: 19.25px;
  r: 1.75px;
}

.y2uknf45d {
  d: path("M2.75 14v-2.6A2 2 0 0 1 4.3 9.45l2.45-.55L8.8 5.45a2 2 0 0 1 1.72-.95h2.96a2 2 0 0 1 1.72.95l2.05 3.45l2.45.55a2 2 0 0 1 1.55 1.95V14a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1");
}
</style><g class="hntgybcog"><path class="y2uknf45d"/><circle class="rqad3rgfm"/><circle class="ay165rc5y"/><path class="mpb8zwbqv"/></g>`,
		"fallback": "iconoven:family-car",
	});
}

export default Component;
