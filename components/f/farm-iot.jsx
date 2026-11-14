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

.huk256b0l {
  d: path("M10.5 12.5h3V18L12 20.5L10.5 18Zm-7 5.5h4.25m8.5 0h4.25M10 9a2.75 2.75 0 0 1 4 0M8 7a5.75 5.75 0 0 1 8 0");
}

.k003_9bml {
  d: path("M6 5a8.5 8.5 0 0 1 12 0");
}
</style><g class="hntgybcog"><path class="huk256b0l"/><path class="k003_9bml"/></g>`,
		"fallback": "uix:farm-iot",
	});
}

export default Component;
