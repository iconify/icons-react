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
		"content": `<style>.hjeuxo3vf {
  d: path("m6 16l4-8h6l2 8m-8-8L8.5 5.5h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lt5smubbd {
  d: path("M2 16a4 4 0 1 0 8 0a4 4 0 1 0-8 0m12 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="lt5smubbd"/><path class="hjeuxo3vf"/></g>`,
		"fallback": "uix:category-cycling",
	});
}

export default Component;
