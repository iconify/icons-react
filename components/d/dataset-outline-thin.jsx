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
		"content": `<style>.d2gpzsh-s {
  d: path("M9 6v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}

.x50q_4bdr {
  d: path("M3 10h18");
}

.yih0nfb7c {
  d: path("M3 14h18");
}
</style><g class="hntgybcog"><path class="n09nomjwg"/><path class="x50q_4bdr"/><path class="yih0nfb7c"/><path class="d2gpzsh-s"/></g>`,
		"fallback": "iconmind:dataset-outline-thin",
	});
}

export default Component;
