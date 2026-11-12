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

.s_mr-hbpj {
  d: path("M19 15L12 9L5 15");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.yj0yf9o2f {
  d: path("M8.5 12L12 9L19 15");
}
</style><g class="hntgybcog"><path class="s_mr-hbpj"/><path class="yj0yf9o2f"/></g>`,
		"fallback": "solar:alt-arrow-up-line-duotone",
	});
}

export default Component;
