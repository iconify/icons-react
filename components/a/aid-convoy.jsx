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
		"content": `<style>.bidnqubik {
  d: path("M2.5 14V7a1 1 0 0 1 1-1h4v3H9l1.5 1.75V14Zm11 0V7a1 1 0 0 1 1-1h4v3H20l1.5 1.75V14Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkvcz3vir {
  d: path("M3 15.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.75 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="bidnqubik"/><path class="jkvcz3vir"/></g>`,
		"fallback": "uix:aid-convoy",
	});
}

export default Component;
