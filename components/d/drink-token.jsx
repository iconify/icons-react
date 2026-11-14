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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.z5ezmb_7o {
  d: path("M9.907 7h4.186a1.5 1.5 0 0 1 1.492 1.649l-.7 7A1.5 1.5 0 0 1 13.393 17h-2.786a1.5 1.5 0 0 1-1.492-1.351l-.7-7A1.5 1.5 0 0 1 9.907 7M8.75 11h6.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="z5ezmb_7o"/></g>`,
		"fallback": "uix:drink-token",
	});
}

export default Component;
