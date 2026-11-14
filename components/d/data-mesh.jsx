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

.n0o1unb8x {
  fill: currentColor;
  d: path("M10.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-4.25 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M2 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.wtgalybrt {
  d: path("M7.75 11.5h8.5l-4.25 8z");
}

.ynsiriich {
  d: path("m12 3.5l-8.5 16h17z");
}
</style><g class="hntgybcog"><path class="ynsiriich"/><path class="wtgalybrt"/><path class="n0o1unb8x"/></g>`,
		"fallback": "uix:data-mesh",
	});
}

export default Component;
