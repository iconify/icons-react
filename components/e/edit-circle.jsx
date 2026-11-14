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

.tp8oobcvp {
  d: path("M16.596 7.404za1.25 1.25 0 0 1 0 1.768l-5.205 5.205a1.5 1.5 0 0 1-.649.381l-.863.247a.715.715 0 0 1-.884-.884l.247-.863a1.5 1.5 0 0 1 .381-.649l5.205-5.205a1.25 1.25 0 0 1 1.768 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="tp8oobcvp"/></g>`,
		"fallback": "uix:edit-circle",
	});
}

export default Component;
