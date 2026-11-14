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

.k9_4tgb1k {
  d: path("m7.5 19.5l-3.5 1L5 17a8.5 8.5 0 1 1 2.5 2.5");
}

.m-h7jpboe {
  d: path("M15.536 7.964za1 1 0 0 1 0 1.415l-4.983 4.982a1.5 1.5 0 0 1-.766.41l-.439.088a.6.6 0 0 1-.707-.707l.088-.439a1.5 1.5 0 0 1 .41-.766l4.982-4.983a1 1 0 0 1 1.415 0");
}
</style><g class="hntgybcog"><path class="k9_4tgb1k"/><path class="m-h7jpboe"/></g>`,
		"fallback": "uix:comment-edit",
	});
}

export default Component;
