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

.j-uhg7vsc {
  d: path("M11 3H8v7l-2 2 2 2v7h3");
}

.m44kqpqtt {
  d: path("M13 3h3v7l2 2 -2 2v7h-3");
}
</style><g class="hntgybcog"><path class="j-uhg7vsc"/><path class="m44kqpqtt"/></g>`,
		"fallback": "iconmind:braces-outline-thin",
	});
}

export default Component;
