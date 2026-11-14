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
		"content": `<style>.c-edibknc {
  d: path("M10 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0m1.5 3.5l-8 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m2sffu8jk {
  d: path("M12.75 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m2 10.5l2 2L21 15.75");
}
</style><g class="hntgybcog"><path class="c-edibknc"/><path class="m2sffu8jk"/></g>`,
		"fallback": "uix:dental-checkup",
	});
}

export default Component;
