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

.wcc89ubxf {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5m-9 2.5c.9 0 1.75.5 1.75 1.5v5c0 1-.85 1.5-1.75 1.5m3.5-8c-.9 0-1.75.5-1.75 1.5m1.75 6.5c-.9 0-1.75-.5-1.75-1.5m-1-2.5h2");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="wcc89ubxf"/></g>`,
		"fallback": "iconoven:file-rename",
	});
}

export default Component;
