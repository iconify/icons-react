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
		"content": `<style>.byucy_b7h {
  d: path("M11.311 19H2.5v-8l6.25-4v4L15 7v4l6.25-4v5.639");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.w1_ty2utk {
  d: path("M4 10V3h3v5.25m3.75 1.5V3h3v4.75M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="byucy_b7h"/><path class="w1_ty2utk"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:factory-dollar",
	});
}

export default Component;
