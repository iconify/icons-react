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

.nw1z20kkx {
  d: path("m8 7l4 5l4-5");
}

.ok4wuc4gs {
  d: path("M9.5 3a2.5 2.5 0 0 0 5 0h7v9h-4v9.5h-11V12h-4V3Z");
}
</style><g class="hntgybcog"><path class="ok4wuc4gs"/><path class="nw1z20kkx"/></g>`,
		"fallback": "uix:dashiki",
	});
}

export default Component;
