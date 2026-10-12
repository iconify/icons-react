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

.l0r7vlbov {
  cx: 12px;
  cy: 7.25px;
  r: 4.5px;
}

.n2cg06gmi {
  d: path("M7.35 14.75h9.3q.6 0 .13.37l-2.81 2.26q-.47.37-.47.97v.8q0 .6-.42 1.02l-.66.66q-.42.42-.84 0l-.66-.66q-.42-.42-.42-1.02v-.8q0-.6-.47-.97l-2.81-2.26q-.47-.37.13-.37");
}
</style><g class="hntgybcog"><circle class="l0r7vlbov"/><path class="n2cg06gmi"/></g>`,
		"fallback": "iconoven:golf-tee",
	});
}

export default Component;
