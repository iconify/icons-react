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

.py99ykbwo {
  d: path("m17.061 10.561l.378.378a1.5 1.5 0 0 1 0 2.122l-.378.378a1.5 1.5 0 0 1-2.122 0l-.378-.378a1.5 1.5 0 0 1 0-2.122l.378-.378a1.5 1.5 0 0 1 2.122 0");
}

.z7wgppb5j {
  d: path("M7.5 7h9a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5a5 5 0 0 1 5-5");
}
</style><g class="hntgybcog"><path class="z7wgppb5j"/><path class="py99ykbwo"/></g>`,
		"fallback": "uix:component-boolean-prop",
	});
}

export default Component;
