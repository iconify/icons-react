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
		"content": `<style>.d8z1r1beo {
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzx0dxb2r {
  d: path("m12 2 3 3 -3 3");
}

.yrm0q7bju {
  fill: currentColor;
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zsgq_v_eg {
  d: path("M14.5 8 10 12.5h3L8.5 17");
}
</style><g class="hntgybcog"><path class="yrm0q7bju"/><path class="d8z1r1beo"/><path class="wzx0dxb2r"/><path class="zsgq_v_eg"/></g>`,
		"fallback": "iconmind:hot-reload-duotone-thin",
	});
}

export default Component;
