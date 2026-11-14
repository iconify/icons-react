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

.kfrxcywob {
  d: path("m5.349 10.239l1.223-.26a2.625 2.625 0 0 1 3.113 2.022l.988 4.646a2.625 2.625 0 0 1-2.022 3.114l-1.223.26a2.625 2.625 0 0 1-3.113-2.022l-.988-4.646a2.625 2.625 0 0 1 2.022-3.114m12.079-.26l1.223.26a2.625 2.625 0 0 1 2.022 3.114l-.988 4.646a2.625 2.625 0 0 1-3.113 2.022l-1.223-.26a2.625 2.625 0 0 1-2.022-3.114l.988-4.646a2.625 2.625 0 0 1 3.113-2.022M6 6.5a7 7 0 0 1 12 0");
}

.x3mqa04pb {
  d: path("M18.5 4L18 6.5l-2.5-.75");
}
</style><g class="hntgybcog"><path class="kfrxcywob"/><path class="x3mqa04pb"/></g>`,
		"fallback": "uix:card-shuffle",
	});
}

export default Component;
