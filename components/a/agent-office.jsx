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
		"content": `<style>.hcpu369ht {
  d: path("M7.375 6.5zA1.125 1.125 0 0 1 8.5 7.625A1.125 1.125 0 0 1 7.375 8.75A1.125 1.125 0 0 1 6.25 7.625A1.125 1.125 0 0 1 7.375 6.5m4.5 0h.25a1.125 1.125 0 0 1 1.125 1.125a1.125 1.125 0 0 1-1.125 1.125h-.25a1.125 1.125 0 0 1-1.125-1.125A1.125 1.125 0 0 1 11.875 6.5m4.75 0za1.125 1.125 0 0 1 1.125 1.125a1.125 1.125 0 0 1-1.125 1.125A1.125 1.125 0 0 1 15.5 7.625A1.125 1.125 0 0 1 16.625 6.5M10 21.5v-6h4v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q5_b5nb_r {
  d: path("M6.125 3h11.75A2.625 2.625 0 0 1 20.5 5.625v13.25a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875V5.625A2.625 2.625 0 0 1 6.125 3");
}
</style><g class="hntgybcog"><path class="q5_b5nb_r"/><path class="hcpu369ht"/></g>`,
		"fallback": "uix:agent-office",
	});
}

export default Component;
