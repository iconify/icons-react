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
		"content": `<style>.ak61uijvz {
  d: path("m15.987 5.141l2.5-.909a1.5 1.5 0 0 1 2.013 1.41v3.216a1.5 1.5 0 0 1-2.013 1.41l-2.5-.909A1.5 1.5 0 0 1 15 7.949V6.551a1.5 1.5 0 0 1 .987-1.41M12 11v4m-8.5 0h17M4 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kax0dsawl {
  d: path("M6.5 3.5h5A3.5 3.5 0 0 1 15 7v.5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 3 7.5V7a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="kax0dsawl"/><path class="ak61uijvz"/></g>`,
		"fallback": "uix:camera-dolly-play",
	});
}

export default Component;
