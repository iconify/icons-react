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

.icmlllaey {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8 7.5h3M8 11h8m-6.312 2.5h1.625a2.19 2.19 0 0 1 2.187 2.188v1.625a2.19 2.19 0 0 1-2.187 2.187H9.688A2.19 2.19 0 0 1 7.5 17.313v-1.625A2.19 2.19 0 0 1 9.688 13.5");
}

.v_4znubzh {
  d: path("m9.5 16.5l1 1l1.25-1.75");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="icmlllaey"/><path class="v_4znubzh"/></g>`,
		"fallback": "uix:gift-aid-form",
	});
}

export default Component;
