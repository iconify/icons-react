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
		"content": `<style>.fnwx1d-uu {
  d: path("m17 9.5 2.5 2.5 -2.5 2.5 -2.5 -2.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jl5_x8rdu {
  d: path("m7 5 3 3 -3 3 -3 -3Z");
}

.sur-qkf7m {
  d: path("M7 21a5 5 0 0 1 10 0");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="sur-qkf7m"/><path class="z9ittvbis"/><path class="jl5_x8rdu"/><path class="fnwx1d-uu"/></g>`,
		"fallback": "iconmind:blue-hour-outline-thin",
	});
}

export default Component;
