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
		"content": `<style>.hca8hq7pa {
  d: path("M5.125 10.5h2.75a2.625 2.625 0 0 1 2.625 2.625v2.25A2.625 2.625 0 0 1 7.875 18h-2.75A2.625 2.625 0 0 1 2.5 15.375v-2.25A2.625 2.625 0 0 1 5.125 10.5M15.25 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-1.75 8c0-2.25 1.75-3 4-3s4 .75 4 3M5.25 14.25h.01m2.49 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nf06zdb_a {
  d: path("M6.5 10.5c0-7.5 11-7.5 11-3.5m-2-2l2 2l2-2");
}
</style><g class="hntgybcog"><path class="hca8hq7pa"/><path class="nf06zdb_a"/></g>`,
		"fallback": "uix:chatbot-handoff",
	});
}

export default Component;
