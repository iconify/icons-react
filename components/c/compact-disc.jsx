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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.usjdnwbla {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m.862 5.873a6.25 6.25 0 0 1-4.017-4.788");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="usjdnwbla"/></g>`,
		"fallback": "uix:compact-disc",
	});
}

export default Component;
