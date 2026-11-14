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
		"content": `<style>.arbtnbcve {
  d: path("M4.25 14L6 15.25l1.75-1.5l1.75 1.5L11.25 14");
}

.cwtxecb9j {
  d: path("M5 2.5h14l1.5 19h-6.75L12 9.5l-1.75 12H3.5ZM5 6h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cwtxecb9j"/><path class="arbtnbcve"/></g>`,
		"fallback": "uix:distressed-jeans",
	});
}

export default Component;
