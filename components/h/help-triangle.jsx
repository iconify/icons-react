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
		"content": `<style>.de-xkci3q {
  d: path("m14.283 7.026l4.994 8.804a2.625 2.625 0 0 1-2.284 3.92H7.007a2.625 2.625 0 0 1-2.284-3.92l4.994-8.804a2.625 2.625 0 0 1 4.566 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r2-eo_i_z {
  d: path("M10.5 11.75c0-.85.7-1.5 1.5-1.5s1.5.65 1.5 1.5c0 1.15-1.5 1.35-1.5 2.5M12 17h.01");
}
</style><g class="hntgybcog"><path class="de-xkci3q"/><path class="r2-eo_i_z"/></g>`,
		"fallback": "uix:help-triangle",
	});
}

export default Component;
