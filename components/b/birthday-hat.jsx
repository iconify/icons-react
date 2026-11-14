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

.ko9pjwjrg {
  d: path("M5.5 20L12 6.5L18.5 20c-4.5 1.5-8.5 1.5-13 0");
}

.yagdf9ptm {
  d: path("M9.75 4.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8 15l2 2l2-2l2 2l2-2");
}
</style><g class="hntgybcog"><path class="ko9pjwjrg"/><path class="yagdf9ptm"/></g>`,
		"fallback": "uix:birthday-hat",
	});
}

export default Component;
