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

.n13x6dbmu {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19");
}

.t7ljqs0-a {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M8.939 9.061l2-2a1.5 1.5 0 0 1 2.122 0l2 2a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 12v-1.879a1.5 1.5 0 0 1 .439-1.06");
}
</style><g class="hntgybcog"><path class="n13x6dbmu"/><path class="t7ljqs0-a"/></g>`,
		"fallback": "uix:family-register",
	});
}

export default Component;
