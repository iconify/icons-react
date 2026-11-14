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

.j2tdd3b_h {
  d: path("M3.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0H9c4.5 0 3.5-12 8-12h3.5");
}

.xa9a0cbse {
  d: path("M17.75 3.25L20.5 6l-2.75 2.75");
}
</style><g class="hntgybcog"><path class="j2tdd3b_h"/><path class="xa9a0cbse"/></g>`,
		"fallback": "uix:http-redirect",
	});
}

export default Component;
