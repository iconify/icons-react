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

.vfr8jkb7b {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5M10 11.75L7.75 14.5L10 17.25m4-5.5l2.25 2.75L14 17.25");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="vfr8jkb7b"/></g>`,
		"fallback": "iconoven:code-xml",
	});
}

export default Component;
