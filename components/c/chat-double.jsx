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
		"content": `<style>.e-9dgdkyt {
  d: path("M3 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H8.5l-3 3v-3H5a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7ztdacox {
  d: path("M9 7V5.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4");
}
</style><g class="hntgybcog"><path class="e-9dgdkyt"/><path class="j7ztdacox"/></g>`,
		"fallback": "uix:chat-double",
	});
}

export default Component;
