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

.ofk7xh3ww {
  d: path("m15.905 9.972l-.669 2.155a1.5 1.5 0 0 1-2.493.616l-1.486-1.486a1.5 1.5 0 0 1 .616-2.493l2.155-.669a1.5 1.5 0 0 1 1.877 1.877");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.t5wlhibyc {
  d: path("m8.095 14.028l.669-2.155a1.5 1.5 0 0 1 2.493-.616l1.486 1.486a1.5 1.5 0 0 1-.616 2.493l-2.155.669a1.5 1.5 0 0 1-1.877-1.877");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="ofk7xh3ww"/><path class="t5wlhibyc"/></g>`,
		"fallback": "uix:compass-needle",
	});
}

export default Component;
