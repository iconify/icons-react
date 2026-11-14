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

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}

.x5brc338h {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-9.25 2.75c-1.5 0-1.5.75-1.5 1.75v.75c0 .75-.5 1.25-1.25 1.25c.75 0 1.25.5 1.25 1.25V17c0 1 0 1.75 1.5 1.75m3.5-7.5c1.5 0 1.5.75 1.5 1.75v.75c0 .75.5 1.25 1.25 1.25c-.75 0-1.25.5-1.25 1.25V17c0 1 0 1.75-1.5 1.75M12 13.5h.01m-.01 3h.01");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="x5brc338h"/></g>`,
		"fallback": "uix:file-json",
	});
}

export default Component;
