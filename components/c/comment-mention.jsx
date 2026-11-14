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
		"content": `<style>.bmp972a1v {
  d: path("M14 9.75V13a1.375 1.375 0 0 0 2.75 0v-1A4.75 4.75 0 1 0 15 15.75");
}

.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k9_4tgb1k {
  d: path("m7.5 19.5l-3.5 1L5 17a8.5 8.5 0 1 1 2.5 2.5");
}
</style><g class="hntgybcog"><path class="k9_4tgb1k"/><path class="fv5pcnpmp"/><path class="bmp972a1v"/></g>`,
		"fallback": "uix:comment-mention",
	});
}

export default Component;
