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

.q7q-85-2w {
  d: path("M10 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2.25 7.25q0-2.5 4.25-2.5t4.25 2.5");
}

.rp-sq47ba {
  d: path("M5.5 2.5h13A2.5 2.5 0 0 1 21 5v10a2.5 2.5 0 0 1-2.5 2.5h-8l-4 3.5v-3.5h-1A2.5 2.5 0 0 1 3 15V5a2.5 2.5 0 0 1 2.5-2.5");
}
</style><g class="hntgybcog"><path class="rp-sq47ba"/><path class="q7q-85-2w"/></g>`,
		"fallback": "uix:focus-group",
	});
}

export default Component;
