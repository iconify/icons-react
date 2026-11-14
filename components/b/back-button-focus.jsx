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
		"content": `<style>.ebotri-1n {
  d: path("M2.5 7.5H7l1.5-4H14l1.5 4H19a2.5 2.5 0 0 1 2.5 2.5v11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o8rdurbzc {
  d: path("M8.75 15a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M6 12.25v-2h2m8 0h2v2m0 5.5v2h-2m-8 0H6v-2");
}
</style><g class="hntgybcog"><path class="ebotri-1n"/><path class="o8rdurbzc"/></g>`,
		"fallback": "uix:back-button-focus",
	});
}

export default Component;
