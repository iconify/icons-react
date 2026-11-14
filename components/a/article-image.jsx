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
		"content": `<style>.evc102b6g {
  d: path("M9.25 6h5.5a1.75 1.75 0 0 1 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75v-4A1.75 1.75 0 0 1 9.25 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mg1b7d1vw {
  d: path("m7.5 13.5l4-4l5 4m-9 4h9");
}

.sqgzs9b2w {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5");
}
</style><g class="hntgybcog"><path class="sqgzs9b2w"/><path class="evc102b6g"/><path class="mg1b7d1vw"/></g>`,
		"fallback": "uix:article-image",
	});
}

export default Component;
