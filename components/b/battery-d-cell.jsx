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
		"content": `<style>.as1ud6bid {
  d: path("M9.75 12v5.5h2a2.75 2.75 0 0 0 0-5.5Z");
}

.ex1gacu7o {
  d: path("M10 5h4a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 18V8.5A3.5 3.5 0 0 1 10 5m0-2.5h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ex1gacu7o"/><path class="as1ud6bid"/></g>`,
		"fallback": "uix:battery-d-cell",
	});
}

export default Component;
