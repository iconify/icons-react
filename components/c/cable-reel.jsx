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

.hrkpdpbjl {
  d: path("M3 9a6.5 6.5 0 1 0 13 0A6.5 6.5 0 1 0 3 9");
}

.sm8w1xbrj {
  d: path("M7 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 6.5V19H15m1.75-2.5h1a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 15 19.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m2.75 1H22m-2.5 3H22");
}
</style><g class="hntgybcog"><path class="hrkpdpbjl"/><path class="sm8w1xbrj"/></g>`,
		"fallback": "uix:cable-reel",
	});
}

export default Component;
