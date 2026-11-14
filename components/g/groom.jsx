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
		"content": `<style>.hhoenug3t {
  d: path("m12 17l-2.5-1.5v3Zm0 0l2.5-1.5v3Zm-6.5-.25L9 21.5m9.5-4.75L15 21.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s34524brm {
  d: path("M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21.5c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5");
}
</style><g class="hntgybcog"><path class="s34524brm"/><path class="hhoenug3t"/></g>`,
		"fallback": "uix:groom",
	});
}

export default Component;
