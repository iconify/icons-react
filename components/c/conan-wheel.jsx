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
		"content": `<style>.csof25-mz {
  d: path("M4.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x8op0-bfy {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-7 0h7m5 0h7m-8.25-2.25l2.5-4.25m-5 4.25L8.25 5.5m2.5 8.75l-2.5 4.25m5-4.25l2.5 4.25");
}
</style><g class="hntgybcog"><path class="csof25-mz"/><path class="x8op0-bfy"/></g>`,
		"fallback": "uix:conan-wheel",
	});
}

export default Component;
