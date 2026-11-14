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

.i8138fvwi {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 2.5V5m0 7l4.5-4.5");
}

.y0uiak4gs {
  d: path("M13.5 7.5h3v3M12 12h.01");
}
</style><g class="hntgybcog"><path class="i8138fvwi"/><path class="y0uiak4gs"/></g>`,
		"fallback": "uix:bearing-line",
	});
}

export default Component;
