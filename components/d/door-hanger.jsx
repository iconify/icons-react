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
		"content": `<style>.asypbef-w {
  d: path("M4.5 2.5v19m8-19h3A3.5 3.5 0 0 1 19 6v12a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 9 18V6a3.5 3.5 0 0 1 3.5-3.5");
}

.h9fie9u5w {
  d: path("M11.5 7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m0 7.5h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="asypbef-w"/><path class="h9fie9u5w"/></g>`,
		"fallback": "uix:door-hanger",
	});
}

export default Component;
