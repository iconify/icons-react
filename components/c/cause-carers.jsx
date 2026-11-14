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
		"content": `<style>.c57r41bsq {
  d: path("M9.75 11.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-.5 7c0-1.25 1.25-2 2.75-2s2.75.75 2.75 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.igcaeo5ty {
  d: path("m12 21l-8.25-8.25a4.6 4.6 0 0 1 8.25-6a4.6 4.6 0 0 1 8.25 6Z");
}
</style><g class="hntgybcog"><path class="igcaeo5ty"/><path class="c57r41bsq"/></g>`,
		"fallback": "uix:cause-carers",
	});
}

export default Component;
