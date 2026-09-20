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

.jfhg8zbol {
  d: path("M3.54 13.92a9 9 0 0 1 16.92 0");
}

.m1u_gbo_m {
  d: path("m12 17 -5 -5");
}

.me177l4bh {
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="jfhg8zbol"/><path class="m1u_gbo_m"/><path class="me177l4bh"/></g>`,
		"fallback": "iconmind:gauge-outline-thin",
	});
}

export default Component;
