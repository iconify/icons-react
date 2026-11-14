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
		"content": `<style>.drdeqbbxo {
  d: path("M7.75 15v-2.5L8.5 10l1.75 1.5c2.25-2 6-1 6 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.khw5ntbzq {
  d: path("M3.75 11V6.5a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2V11");
}

.zyb9o3b7k {
  d: path("M2.5 19.5v-7.25a1.25 1.25 0 0 1 2.5 0V15h14v-2.75a1.25 1.25 0 0 1 2.5 0v7.25Z");
}
</style><g class="hntgybcog"><path class="zyb9o3b7k"/><path class="khw5ntbzq"/><path class="drdeqbbxo"/></g>`,
		"fallback": "uix:dog-sofa",
	});
}

export default Component;
