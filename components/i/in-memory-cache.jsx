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
		"content": `<style>.h0pzhpblc {
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 16H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xktjysdee {
  d: path("m12.002 7.82l-1.649 1.766a.543.543 0 0 0 .397.914a.876.876 0 0 1 .823 1.175l-.073.2a.298.298 0 0 0 .498.305l1.649-1.766a.543.543 0 0 0-.397-.914a.876.876 0 0 1-.823-1.175l.073-.2a.298.298 0 0 0-.498-.305M6 16v3.5m4-3.5v3.5m4-3.5v3.5m4-3.5v3.5");
}
</style><g class="hntgybcog"><path class="h0pzhpblc"/><path class="xktjysdee"/></g>`,
		"fallback": "uix:in-memory-cache",
	});
}

export default Component;
