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
		"content": `<style>.ej8no5byx {
  d: path("M5 4q3.5-1.5 7 0t7 0v16q-3.5 1.5-7 0t-7 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hsxcruxal {
  d: path("M8.5 12q1.75-1.25 3.5 0t3.5 0");
}
</style><g class="hntgybcog"><path class="ej8no5byx"/><path class="hsxcruxal"/></g>`,
		"fallback": "uix:dryer-sheet",
	});
}

export default Component;
