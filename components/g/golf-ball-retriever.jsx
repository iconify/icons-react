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
		"content": `<style>.bluk6db2u {
  d: path("M4.5 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t_4plbt9w {
  d: path("M11.75 11.75L21 21M11.743 3.257a6 6 0 0 1-8.486 8.486");
}
</style><g class="hntgybcog"><path class="t_4plbt9w"/><path class="bluk6db2u"/></g>`,
		"fallback": "uix:golf-ball-retriever",
	});
}

export default Component;
