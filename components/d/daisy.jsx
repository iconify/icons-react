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

.yfgor35df {
  d: path("M16.75 11.25A2 2 0 0 1 14 14a2 2 0 0 1-4 0a2 2 0 0 1-2.75-2.75a2 2 0 0 1 0-4A2 2 0 0 1 10 4.5a2 2 0 0 1 4 0a2 2 0 0 1 2.75 2.75a2 2 0 0 1 0 4M12 16v5.5");
}

.zspe1_foj {
  d: path("M10 9.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 11.25q4.5 0 6-3q-4-.5-6 3");
}
</style><g class="hntgybcog"><path class="yfgor35df"/><path class="zspe1_foj"/></g>`,
		"fallback": "uix:daisy",
	});
}

export default Component;
