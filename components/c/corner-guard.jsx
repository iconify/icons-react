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
		"content": `<style>.heo37re6p {
  d: path("M13 7V2.5H7.5a5 5 0 0 0-5 5V13H7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tj57lu47i {
  d: path("M21.5 7h-12A2.5 2.5 0 0 0 7 9.5v12");
}
</style><g class="hntgybcog"><path class="tj57lu47i"/><path class="heo37re6p"/></g>`,
		"fallback": "uix:corner-guard",
	});
}

export default Component;
