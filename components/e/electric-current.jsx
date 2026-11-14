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

.hvexjkbco {
  d: path("M2.25 15.25L4.5 13l2.25 2.25m10.5-4.5L19.5 13l2.25-2.25");
}

.irbudsb2w {
  d: path("M10.5 5.5h-6v15h15v-15h-6m-3-2.5v5m3-3.75v2.5");
}
</style><g class="hntgybcog"><path class="irbudsb2w"/><path class="hvexjkbco"/></g>`,
		"fallback": "uix:electric-current",
	});
}

export default Component;
