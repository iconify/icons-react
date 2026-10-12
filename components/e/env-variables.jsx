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

.jz9wy2bsc {
  d: path("M13.75 2.75h-6.5a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h9.5a2.5 2.5 0 0 0 2.5-2.5V8.25Z");
}

.k-qhiybmo {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5m-11 4.25h2m-2 4.25h2M13 12.5h2.75M13 16.75h2.75");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="k-qhiybmo"/></g>`,
		"fallback": "iconoven:env-variables",
	});
}

export default Component;
