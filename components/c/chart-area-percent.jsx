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

.lg-8n1num {
  d: path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2");
}

.my21nhd9n {
  d: path("M3 9.5c3.5-3 6.5 2 10-1c3-2.5 5.5-1.5 8-2");
}

.p_4ejy8rr {
  fill: currentColor;
  d: path("M3 15c3.5-2.5 6.5 2 10-1c3-2.5 5.5-1.5 8-2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="lg-8n1num"/><path class="my21nhd9n"/><path class="p_4ejy8rr"/></g>`,
		"fallback": "uix:chart-area-percent",
	});
}

export default Component;
