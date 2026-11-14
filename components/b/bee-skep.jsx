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
		"content": `<style>.gry5v8u2o {
  d: path("M4 20.5C4 12 7 4 12 4s8 8 8 16.5Zm.5-5h15M5.75 10h12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnh1r6qxc {
  d: path("M10 20.5a2 2 0 0 1 4 0");
}
</style><g class="hntgybcog"><path class="gry5v8u2o"/><path class="vnh1r6qxc"/></g>`,
		"fallback": "uix:bee-skep",
	});
}

export default Component;
