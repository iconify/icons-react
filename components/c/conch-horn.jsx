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
		"content": `<style>.cqq98kbdh {
  d: path("M14 10a4 4 0 1 1-3.75 5.5M7.5 5.5l-3 4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tsi0pcbrz {
  d: path("M4.5 4.5L12.75 7A7 7 0 1 1 7 15.25L3 6.5Z");
}
</style><g class="hntgybcog"><path class="tsi0pcbrz"/><path class="cqq98kbdh"/></g>`,
		"fallback": "uix:conch-horn",
	});
}

export default Component;
