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

.r9sp2tbcf {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5m-10.5 3h3m-3 6.5h6.5M2.75 14.5h18.5");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="r9sp2tbcf"/></g>`,
		"fallback": "iconoven:document-scan",
	});
}

export default Component;
