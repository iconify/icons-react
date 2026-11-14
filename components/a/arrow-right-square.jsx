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

.vfk_k8ukq {
  d: path("M20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625M7.5 12h9");
}

.xpb3jfbzi {
  d: path("m12.5 8l4 4l-4 4");
}
</style><g class="hntgybcog"><path class="vfk_k8ukq"/><path class="xpb3jfbzi"/></g>`,
		"fallback": "uix:arrow-right-square",
	});
}

export default Component;
