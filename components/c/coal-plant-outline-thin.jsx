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
		"content": `<style>.c6bhbubal {
  d: path("M7.5 12a2.5 2.5 0 0 1 0 -5");
}

.fkoirnb0d {
  d: path("M5 20v-8h5v8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oncki7f2g {
  d: path("M13 20v-5h5v5Z");
}

.y3g1wztdf {
  d: path("M7.5 2a2.5 2.5 0 0 1 0 5");
}
</style><g class="hntgybcog"><path class="fkoirnb0d"/><path class="oncki7f2g"/><path class="c6bhbubal"/><path class="y3g1wztdf"/></g>`,
		"fallback": "iconmind:coal-plant-outline-thin",
	});
}

export default Component;
