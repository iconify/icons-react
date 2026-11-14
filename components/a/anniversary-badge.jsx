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

.y-wz9h2bf {
  d: path("M9 15.25L7.75 21l2.5-1.5M15 15.25L16.25 21l-2.5-1.5M12 12s-2.5-1.5-2.5-3.25c0-.75.6-1.25 1.25-1.25c.5 0 .95.3 1.25.75c.3-.45.75-.75 1.25-.75c.65 0 1.25.5 1.25 1.25C14.5 10.5 12 12 12 12");
}

.z-h5o37vl {
  d: path("M5.25 9.5a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 1 0-13.5 0");
}
</style><g class="hntgybcog"><path class="z-h5o37vl"/><path class="y-wz9h2bf"/></g>`,
		"fallback": "uix:anniversary-badge",
	});
}

export default Component;
