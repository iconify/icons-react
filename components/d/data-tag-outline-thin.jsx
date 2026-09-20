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
		"content": `<style>.c-vnm8iux {
  d: path("M15 12h3");
}

.c5icmybsm {
  d: path("m4 12 6 -6h10v12H10Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="c5icmybsm"/><path class="n3p0zmbop"/><path class="c-vnm8iux"/></g>`,
		"fallback": "iconmind:data-tag-outline-thin",
	});
}

export default Component;
