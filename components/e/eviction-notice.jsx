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

.qmf7m2b8u {
  d: path("M10 5.5h4A1.5 1.5 0 0 1 15.5 7v5a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 12V7A1.5 1.5 0 0 1 10 5.5m2 0h.01m-1.76 3.25h3.5m-3.5 2.5h2.5m2.75 5.25h.01");
}

.uk14yjhev {
  d: path("M6 21.5V4a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 4v17.5m-15.5 0h19m-6-8h.01");
}
</style><g class="hntgybcog"><path class="uk14yjhev"/><path class="qmf7m2b8u"/></g>`,
		"fallback": "uix:eviction-notice",
	});
}

export default Component;
