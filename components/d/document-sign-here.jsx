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

.xm0w23bek {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5m-11 3.5h5m-5 5.75c.75-2 1.75-3.25 2.5-2.5s-.5 2.5.5 2.5s1.25-1.5 2-1.5s.5 1 1.5 1H16");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="xm0w23bek"/></g>`,
		"fallback": "iconoven:document-sign-here",
	});
}

export default Component;
