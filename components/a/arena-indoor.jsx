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

.hqymo8wxy {
  d: path("M10 20.5V16a2 2 0 0 1 4 0v4.5");
}

.pqrrdkbgl {
  d: path("M2.5 20.5V11a9.5 6.5 0 0 1 19 0v9.5Zm0-9.5h19");
}
</style><g class="hntgybcog"><path class="pqrrdkbgl"/><path class="hqymo8wxy"/></g>`,
		"fallback": "uix:arena-indoor",
	});
}

export default Component;
