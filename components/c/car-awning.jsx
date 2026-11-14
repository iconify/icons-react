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

.k9qa0gl6r {
  d: path("M2.5 14.5v-3q0-1 1-1H6l2.5-4H14v8Z");
}

.xnw6zacdn {
  d: path("M3.5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.75 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M14 6.5l7.5 12");
}
</style><g class="hntgybcog"><path class="k9qa0gl6r"/><path class="xnw6zacdn"/></g>`,
		"fallback": "uix:car-awning",
	});
}

export default Component;
