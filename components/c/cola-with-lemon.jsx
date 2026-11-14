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
		"content": `<style>.fb3g56bil {
  d: path("M10 12.25h.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H10a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrux4cf_s {
  d: path("M4 6h12.5l-2 15H6Zm.25 3.5h12M14 6a3.5 3.5 0 0 1 7 0Z");
}
</style><g class="hntgybcog"><path class="zrux4cf_s"/><path class="fb3g56bil"/></g>`,
		"fallback": "uix:cola-with-lemon",
	});
}

export default Component;
