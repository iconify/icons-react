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
		"content": `<style>.dti7o1mke {
  d: path("M8 9.5a3.5 3.5 0 0 1 3.5 3.5M8 6.5a6.5 6.5 0 0 1 6.5 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p-ue68boo {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V7A3.5 3.5 0 0 1 6 3.5m6 13v4m-4 0h8M8 13h.01");
}
</style><g class="hntgybcog"><path class="p-ue68boo"/><path class="dti7o1mke"/></g>`,
		"fallback": "uix:feed-reader",
	});
}

export default Component;
