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
		"content": `<style>.h4ex4bapq {
  d: path("M4.25 15.75V5.25a2.5 2.5 0 0 1 2.5-2.5h6m1.5 9.5v5m-2.5-2.5h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tnjn6lx5h {
  d: path("M15.25 5.75h-5.5a2.5 2.5 0 0 0-2.5 2.5v10.5a2.5 2.5 0 0 0 2.5 2.5h8.5a2.5 2.5 0 0 0 2.5-2.5v-8.5Z");
}
</style><g class="hntgybcog"><path class="tnjn6lx5h"/><path class="h4ex4bapq"/></g>`,
		"fallback": "iconoven:file-copy",
	});
}

export default Component;
