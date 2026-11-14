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

.tn_jwr7us {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M10.75 8h4a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 9 11.75v-2A1.75 1.75 0 0 1 10.75 8M11 8V7a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1");
}
</style><g class="hntgybcog"><path class="n13x6dbmu"/><path class="tn_jwr7us"/></g>`,
		"fallback": "uix:genre-business-book",
	});
}

export default Component;
