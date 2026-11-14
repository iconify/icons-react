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
		"content": `<style>.aovjznn-o {
  d: path("M15.5 2.5V5A1.5 1.5 0 0 0 17 6.5h2.5M9.25 7h.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 9.75 11h-.5A1.75 1.75 0 0 1 7.5 9.25v-.5A1.75 1.75 0 0 1 9.25 7m5 7.5h.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-.5a1.75 1.75 0 0 1-1.75-1.75v-.5a1.75 1.75 0 0 1 1.75-1.75M9.5 11v5.5h3");
}

.ea6s7vb_x {
  d: path("M7 2.5h8.5l4 4V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ea6s7vb_x"/><path class="aovjznn-o"/></g>`,
		"fallback": "uix:file-schema",
	});
}

export default Component;
