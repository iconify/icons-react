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
		"content": `<style>.a6assn7kf {
  d: path("M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
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

.q4di03x2w {
  d: path("M5.5 12a6.5 2 0 1 0 13 0a6.5 2 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="a6assn7kf"/><path class="q4di03x2w"/></g>`,
		"fallback": "uix:astronaut-badge",
	});
}

export default Component;
