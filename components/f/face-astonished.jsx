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
		"content": `<style>.a5yafwkxv {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m4.75-5.25l2.5-1m7 1l-2.5-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ogq57dbcs {
  d: path("M7.25 10.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-3.75 6a2 2.25 0 1 0 4 0a2 2.25 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="a5yafwkxv"/><path class="ogq57dbcs"/></g>`,
		"fallback": "uix:face-astonished",
	});
}

export default Component;
