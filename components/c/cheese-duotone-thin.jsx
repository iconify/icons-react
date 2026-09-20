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

.hxfvjbc9o {
  d: path("M4 19v-6l6 -6h10v12Z");
}

.i9yv2ebba {
  fill: currentColor;
  d: path("M14 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qot4e3zhe {
  d: path("M8 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.skovrp7bf {
  fill: currentColor;
  d: path("M4 19v-6l6 -6h10v12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t7edyg0pd {
  fill: currentColor;
  d: path("M8 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vzyxlnb8e {
  d: path("M14 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="skovrp7bf"/><path class="t7edyg0pd"/><path class="i9yv2ebba"/><path class="hxfvjbc9o"/><path class="qot4e3zhe"/><path class="vzyxlnb8e"/></g>`,
		"fallback": "iconmind:cheese-duotone-thin",
	});
}

export default Component;
