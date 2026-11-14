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
		"content": `<style>.czl7icbml {
  d: path("M9.5 2.5h5A3.5 3.5 0 0 1 18 6v8a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 14V6a3.5 3.5 0 0 1 3.5-3.5m-.5 19h6m-3-4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r43agud4t {
  d: path("m9 10.25l2.25 2.25L15 8.25");
}
</style><g class="hntgybcog"><path class="czl7icbml"/><path class="r43agud4t"/></g>`,
		"fallback": "uix:check-in-tablet",
	});
}

export default Component;
