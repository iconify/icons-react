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
		"content": `<style>.as5n0ffis {
  d: path("m9 21.5l3-4l3 4m-11 0h16M11.434 7.754l4.431.781m-5.213 3.65l4.432.782");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lnhuf8bpw {
  d: path("m12.092 3.3l4.678.825a2.625 2.625 0 0 1 2.129 3.041l-1.519 8.617a2.625 2.625 0 0 1-3.041 2.129l-4.678-.824a2.625 2.625 0 0 1-2.129-3.041L9.051 5.43a2.625 2.625 0 0 1 3.041-2.13");
}
</style><g class="hntgybcog"><path class="lnhuf8bpw"/><path class="as5n0ffis"/></g>`,
		"fallback": "uix:accelerator-pedal",
	});
}

export default Component;
