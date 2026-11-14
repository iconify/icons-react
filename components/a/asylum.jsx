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
		"content": `<style>.avwiuvbsw {
  d: path("m3 11l9-7l9 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhdf6vaqp {
  d: path("M9.5 11.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7 21c0-3.25 2.25-4.75 5-4.75s5 1.5 5 4.75");
}
</style><g class="hntgybcog"><path class="avwiuvbsw"/><path class="vhdf6vaqp"/></g>`,
		"fallback": "uix:asylum",
	});
}

export default Component;
