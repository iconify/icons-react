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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.h_p-57bvu {
  d: path("M19 8v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t2rd8jbcx {
  d: path("M5 8v8");
}

.z8g2jgblp {
  d: path("M5 12h14");
}
</style><g class="s0phu2bbs"><path class="t2rd8jbcx"/><path class="z8g2jgblp"/><path class="h_p-57bvu"/><path class="bo51iypxr"/></g>`,
		"fallback": "iconmind:confidence-interval-outline-bold",
	});
}

export default Component;
