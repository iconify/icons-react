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
		"content": `<style>.bezhy9b4y {
  d: path("M10.5 2.5h3A3.5 3.5 0 0 1 17 6v9.25a3.5 3.5 0 0 1-3.5 3.5h-3a3.5 3.5 0 0 1-3.5-3.5V6a3.5 3.5 0 0 1 3.5-3.5M5 21.5h14m-9.25-15h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zcd6xcbeb {
  d: path("M10.5 14.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="bezhy9b4y"/><path class="zcd6xcbeb"/></g>`,
		"fallback": "uix:game-console-vertical",
	});
}

export default Component;
