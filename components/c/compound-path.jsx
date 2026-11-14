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

.jhcnoxblb {
  d: path("M5 3h9.5v5.5a6.5 6.5 0 1 1-6 6H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2");
}

.sbi0wwb1y {
  fill: currentColor;
  d: path("M14.5 7.25za1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25m-6 6za1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25");
}
</style><g class="hntgybcog"><path class="jhcnoxblb"/><path class="sbi0wwb1y"/></g>`,
		"fallback": "uix:compound-path",
	});
}

export default Component;
