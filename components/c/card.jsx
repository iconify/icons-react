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

.n8wmbbbrb {
  d: path("M4.5 5.5H17l4.5 4.5v6.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2");
}

.vytnguc9x {
  d: path("M17 5.5V8a2 2 0 0 0 2 2h2.5");
}
</style><g class="hntgybcog"><path class="n8wmbbbrb"/><path class="vytnguc9x"/></g>`,
		"fallback": "uix:card",
	});
}

export default Component;
