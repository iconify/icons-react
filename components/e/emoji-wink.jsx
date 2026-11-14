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

.wbzl-n3-e {
  d: path("M13.5 10.5c.75-1 2.25-1 3 0m-8 4c1 1.5 2.1 2.25 3.5 2.25s2.5-.75 3.5-2.25");
}

.zt30-rrpj {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 10h.01");
}
</style><g class="hntgybcog"><path class="zt30-rrpj"/><path class="wbzl-n3-e"/></g>`,
		"fallback": "uix:emoji-wink",
	});
}

export default Component;
