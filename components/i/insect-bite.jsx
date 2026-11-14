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
		"content": `<style>.c-scvwald {
  d: path("M10 14.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0m-2.75-4a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-2-2.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m.25-1l-3-3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p6zl8sb3u {
  d: path("M10.25 8.5C11 5 13.75 3 16 3.5c.25 2.25-2.25 4.75-4.75 5.75M8.5 12.5L6 17m4-4.25l-.25 5.75m1.75-6L13 17");
}
</style><g class="hntgybcog"><path class="c-scvwald"/><path class="p6zl8sb3u"/></g>`,
		"fallback": "uix:insect-bite",
	});
}

export default Component;
