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

.jpzm84ifn {
  d: path("m3 6l7 6h11M3 18l7-6");
}

.z9w5pkqbx {
  d: path("M17.5 8.5L21 12l-3.5 3.5");
}
</style><g class="hntgybcog"><path class="jpzm84ifn"/><path class="z9w5pkqbx"/></g>`,
		"fallback": "uix:arrow-merge-right",
	});
}

export default Component;
