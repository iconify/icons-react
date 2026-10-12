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

.jg3ka1bkp {
  d: path("M12 2.75c-4 0-7 6.25-7 11a7 7 0 0 0 14 0c0-4.75-3-11-7-11");
}

.nn22zo4jl {
  d: path("M8.5 14c0-1.75.5-3.5 1.5-5");
}
</style><g class="hntgybcog"><path class="jg3ka1bkp"/><path class="nn22zo4jl"/></g>`,
		"fallback": "iconoven:eggs-carton",
	});
}

export default Component;
