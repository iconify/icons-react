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
		"content": `<style>.du2fg78ji {
  d: path("M9.25 12.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m4-4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yjj9rmb_c {
  d: path("M3 21C3 10.5 10.5 3 21 3c0 5-1 8-2.5 10l-2.5-.5l.5 3l-3 .25v2.75C10 20.5 6.5 21 3 21m0 0l5-5");
}
</style><g class="hntgybcog"><path class="yjj9rmb_c"/><path class="du2fg78ji"/></g>`,
		"fallback": "uix:blight",
	});
}

export default Component;
