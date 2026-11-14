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
		"content": `<style>.eh02worsx {
  d: path("M7.5 7.5L10 8.75L7.5 10m9-2.5L14 8.75L16.5 10M10 18a2 2 0 0 1 4 0Zm-2.5-5l-1.25 2.25a1.25 1.25 0 0 0 2.5 0Zm9 0l-1.25 2.25a1.25 1.25 0 0 0 2.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="eh02worsx"/></g>`,
		"fallback": "uix:baby-crying",
	});
}

export default Component;
