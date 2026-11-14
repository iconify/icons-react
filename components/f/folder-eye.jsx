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

.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.u-avoibjp {
  d: path("M8 13.5c1-1.75 2.5-2.75 4-2.75s3 1 4 2.75c-1 1.75-2.5 2.75-4 2.75s-3-1-4-2.75m4 0h.01");
}
</style><g class="hntgybcog"><path class="q3wixnhae"/><path class="u-avoibjp"/></g>`,
		"fallback": "uix:folder-eye",
	});
}

export default Component;
