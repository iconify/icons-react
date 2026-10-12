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

.la5qfrrxr {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2.5px;
}

.twxvwlbnw {
  d: path("M6.25 11.25v-2.5h2.5m9 4v2.5h-2.5");
}
</style><g class="hntgybcog"><rect class="la5qfrrxr"/><path class="twxvwlbnw"/></g>`,
		"fallback": "iconoven:aspect-ratio",
	});
}

export default Component;
