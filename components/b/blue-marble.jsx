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

.mrs9zabuv {
  d: path("M3.5 8.25C7 7.5 10 8.5 9.75 11S6 14 4.5 17.75m9.75-15C13.5 5.5 15 7.5 17 8s2.5 3 4.5 3.5");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="mrs9zabuv"/></g>`,
		"fallback": "uix:blue-marble",
	});
}

export default Component;
