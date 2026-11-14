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
		"content": `<style>.wb52-3b2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 18v-1.25a5 5 0 1 1 5 0V18Zm.5 3h4M12 2.5v2m-7.25.75L6.5 7m11 0l1.75-1.75");
}
</style><path class="wb52-3b2u"/>`,
		"fallback": "uix:ai-brainstorm",
	});
}

export default Component;
