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
		"content": `<style>.e-7u7qd8j {
  d: path("M3.5 10.5a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0M12 19v2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ip6h5vbqo {
  d: path("M11.75 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m.5 3.25l-.75 3M9.25 15l2.25-2.75L13.75 15M9.5 11.25l2.5-1l2.25 1.5");
}
</style><g class="hntgybcog"><path class="e-7u7qd8j"/><path class="ip6h5vbqo"/></g>`,
		"fallback": "uix:hikers-only",
	});
}

export default Component;
