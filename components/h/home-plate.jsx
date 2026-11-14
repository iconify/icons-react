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
		"content": `<style>.d57490buf {
  d: path("M5.75 3.5h12.5A1.75 1.75 0 0 1 20 5.25v6.525a1.75 1.75 0 0 1-.513 1.238l-6.25 6.25a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 4 11.775V5.25A1.75 1.75 0 0 1 5.75 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xivujobpl {
  d: path("M9 7h6a1.5 1.5 0 0 1 1.5 1.5v2.379a1.5 1.5 0 0 1-.439 1.06l-3 3a1.5 1.5 0 0 1-2.122 0l-3-3a1.5 1.5 0 0 1-.439-1.06V8.5A1.5 1.5 0 0 1 9 7");
}
</style><g class="hntgybcog"><path class="d57490buf"/><path class="xivujobpl"/></g>`,
		"fallback": "uix:home-plate",
	});
}

export default Component;
