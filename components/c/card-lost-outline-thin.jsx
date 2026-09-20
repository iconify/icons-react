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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.lf0xnbbug {
  d: path("M11.5 13.5 15 17");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.yytcop79k {
  d: path("M9 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="k6fi9qmtq"/><path class="ozi-k-boi"/><path class="yytcop79k"/><path class="lf0xnbbug"/></g>`,
		"fallback": "iconmind:card-lost-outline-thin",
	});
}

export default Component;
