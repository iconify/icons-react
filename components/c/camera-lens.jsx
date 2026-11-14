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

.j51f-ebgg {
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.qjlvj-0uo {
  d: path("M9.181 10.974a3 3 0 0 1 2.298-1.928");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="j51f-ebgg"/><path class="qjlvj-0uo"/></g>`,
		"fallback": "uix:camera-lens",
	});
}

export default Component;
