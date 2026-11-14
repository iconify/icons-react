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

.om4opn2ot {
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.75 9.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-11.5 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="a6assn7kf"/><path class="om4opn2ot"/></g>`,
		"fallback": "uix:ball-bearing",
	});
}

export default Component;
