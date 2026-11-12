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
		"content": `<style>.ccoks1myo {
  d: path("M19 9L12 15L5 9");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.d9bw24w9w {
  d: path("M8.5 12L12 15L19 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ccoks1myo"/><path class="d9bw24w9w"/></g>`,
		"fallback": "solar:alt-arrow-down-line-duotone",
	});
}

export default Component;
