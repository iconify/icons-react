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
		"content": `<style>.gr7dusbhc {
  d: path("M9.5 15.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.gt78ibbvo {
  d: path("M6 11a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm3.5-7.5H17v2m-5-2V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gt78ibbvo"/><path class="gr7dusbhc"/></g>`,
		"fallback": "uix:dish-soap",
	});
}

export default Component;
