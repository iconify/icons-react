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
		"content": `<style>.g-brwyb-v {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rnqm9rbxe {
  d: path("M6.25 10.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.xt51l_nap {
  d: path("m9.717 15.195l2.518-3.956a1.5 1.5 0 0 1 2.53 0l2.518 3.956a1.5 1.5 0 0 1-1.266 2.305h-5.034a1.5 1.5 0 0 1-1.266-2.305");
}
</style><g class="hntgybcog"><path class="g-brwyb-v"/><path class="rnqm9rbxe"/><path class="xt51l_nap"/></g>`,
		"fallback": "uix:brand-illustration",
	});
}

export default Component;
