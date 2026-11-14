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
		"content": `<style>.a-8mpc6kb {
  d: path("M8.5 17c1-1.25 2.1-1.75 3.5-1.75s2.5.5 3.5 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yve3s6bcw {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 10h.01M15 10h.01");
}
</style><g class="hntgybcog"><path class="yve3s6bcw"/><path class="a-8mpc6kb"/></g>`,
		"fallback": "uix:emoji-sad",
	});
}

export default Component;
