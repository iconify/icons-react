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

.ofdjlob2i {
  d: path("M6.25 9.5c2.25 0 4.25 1.75 4.25 4.5c-2.25 0-4.25-2-4.25-4.5m11.5 0c-2.25 0-4.25 1.75-4.25 4.5c2.25 0 4.25-2 4.25-4.5");
}

.rf1xlvaul {
  d: path("M12 2.5c5.5 0 8.5 4 8.5 8c0 5-5.5 11-8.5 11s-8.5-6-8.5-11c0-4 3-8 8.5-8");
}
</style><g class="hntgybcog"><path class="rf1xlvaul"/><path class="ofdjlob2i"/></g>`,
		"fallback": "uix:alien",
	});
}

export default Component;
