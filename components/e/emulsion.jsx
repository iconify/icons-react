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

.mu43hnbln {
  d: path("M7.75 16a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-2.75-5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.wln_a1bla {
  d: path("M12 2.5s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12");
}
</style><g class="hntgybcog"><path class="wln_a1bla"/><path class="mu43hnbln"/></g>`,
		"fallback": "uix:emulsion",
	});
}

export default Component;
