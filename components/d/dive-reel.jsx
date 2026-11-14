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
		"content": `<style>.absyqjjes {
  d: path("M7.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M10 4.5h7.5a3 3 0 0 1 3 3V20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uoszapb9r {
  d: path("M2.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="uoszapb9r"/><path class="absyqjjes"/></g>`,
		"fallback": "uix:dive-reel",
	});
}

export default Component;
