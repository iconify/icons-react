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

.nb774xbeo {
  d: path("M4.5 4.5h15a2 2 0 0 1 2 2v3a2.5 2.5 0 0 0 0 5v3a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-3a2.5 2.5 0 0 0 0-5v-3a2 2 0 0 1 2-2");
}

.xld1yj0iq {
  d: path("M9.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M8.75 17c0-1.5 1.5-2.25 3.25-2.25s3.25.75 3.25 2.25");
}
</style><g class="hntgybcog"><path class="nb774xbeo"/><path class="xld1yj0iq"/></g>`,
		"fallback": "uix:child-fare",
	});
}

export default Component;
