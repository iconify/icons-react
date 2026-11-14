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

.sqgzs9b2w {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5");
}

.v9mlxixno {
  fill: currentColor;
  d: path("m10.5 17l.75-3.75a2.25 2.25 0 1 1-.75-2.75a2.25 2.25 0 1 1 3 0a2.25 2.25 0 1 1-.75 2.75L13.5 17Z");
}
</style><g class="hntgybcog"><path class="sqgzs9b2w"/><path class="v9mlxixno"/></g>`,
		"fallback": "uix:card-club",
	});
}

export default Component;
