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
		"content": `<style>.e7s618bol {
  d: path("M2.5 21h10l7-4.5a1.5 1.5 0 0 0-1.75-2.25l-4 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i26gpkbaz {
  d: path("M12 11C9 9 6.5 7 6.5 4.75c0-1.75 1.25-2.5 2.75-2.5C10.5 2.25 11.5 3 12 4c.5-1 1.5-1.75 2.75-1.75c1.5 0 2.75.75 2.75 2.5C17.5 7 15 9 12 11m-9.5 4.5h4c1.5 0 2.5 1 3.5 1h3a1.25 1.25 0 0 1 0 2.5H9.5");
}
</style><g class="hntgybcog"><path class="i26gpkbaz"/><path class="e7s618bol"/></g>`,
		"fallback": "uix:csr",
	});
}

export default Component;
