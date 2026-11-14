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
		"content": `<style>.b2pcahbgw {
  d: path("M8.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M12 12v3.75M3.5 18.5c3-4 9-4 12 0l4.5-3v6l-4.5-3c-3 4-9 4-12 0M12 8.25h.01M7.5 18.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytp_h-bdx {
  d: path("M10.75 3.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="ytp_h-bdx"/><path class="b2pcahbgw"/></g>`,
		"fallback": "uix:fish-scale-weigh",
	});
}

export default Component;
