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
		"content": `<style>.axzu7jl0q {
  d: path("m6.5 8l2.25-2L11 8l2.25-2l2.25 2l2.25-2M6.5 13l2.25-2L11 13l2.25-2l2.25 2l2.25-2M6.5 18l2.25-2L11 18l2.25-2l2.25 2l2.25-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.krauzq_cj {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3");
}
</style><g class="hntgybcog"><path class="krauzq_cj"/><path class="axzu7jl0q"/></g>`,
		"fallback": "uix:air-filter",
	});
}

export default Component;
