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

.tdxc63bzi {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M10.25 11h3.5a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 13.75 18h-3.5a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 10.25 11M12 11v7m-3.5-3.5h7");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="tdxc63bzi"/></g>`,
		"fallback": "uix:file-grid",
	});
}

export default Component;
