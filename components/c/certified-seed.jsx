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
		"content": `<style>.btuoimhzm {
  d: path("M4.5 10a5 7.5 0 1 0 10 0a5 7.5 0 1 0-10 0");
}

.gwf5edc8z {
  d: path("M9.5 5.75C8 8.5 8 11.5 9.5 14.25M14.75 18l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="btuoimhzm"/><path class="gwf5edc8z"/></g>`,
		"fallback": "uix:certified-seed",
	});
}

export default Component;
