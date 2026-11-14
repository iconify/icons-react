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

.is8afcbvm {
  d: path("m7.5 15l3-3.25l2.5 2.5l1.5-1.5l2 2M14.5 9h.01");
}

.k9_4tgb1k {
  d: path("m7.5 19.5l-3.5 1L5 17a8.5 8.5 0 1 1 2.5 2.5");
}
</style><g class="hntgybcog"><path class="k9_4tgb1k"/><path class="is8afcbvm"/></g>`,
		"fallback": "uix:comment-image",
	});
}

export default Component;
