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

.puoz56gnk {
  d: path("M6.25 10h11.5M7.5 16.25c0 1.5-1 2-1 3.5m5.5-3.5v4.5m4.5-4.5c0 1.5 1 2 1 3.5");
}

.q7ukifgja {
  width: 18.5px;
  height: 8.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="q7ukifgja"/><path class="puoz56gnk"/></g>`,
		"fallback": "iconoven:air-conditioner",
	});
}

export default Component;
