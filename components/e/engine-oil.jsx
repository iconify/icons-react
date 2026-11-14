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
		"content": `<style>.f1e-wob7b {
  d: path("m5 10l3.5-3.5H17a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm6.75-7.5h.5A1.75 1.75 0 0 1 14 4.25v.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 10 4.75v-.5a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfdb9v2ce {
  d: path("M12 11s2.5 2.5 2.5 4.25a2.5 2.5 0 0 1-5 0C9.5 13.5 12 11 12 11");
}
</style><g class="hntgybcog"><path class="f1e-wob7b"/><path class="lfdb9v2ce"/></g>`,
		"fallback": "uix:engine-oil",
	});
}

export default Component;
