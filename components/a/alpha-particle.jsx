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
		"content": `<style>.bqd_68gfx {
  d: path("M3 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.dj5203bzc {
  d: path("M6 14a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m11.5-2h4m-2.25-2.25L21.5 12l-2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bqd_68gfx"/><path class="dj5203bzc"/></g>`,
		"fallback": "uix:alpha-particle",
	});
}

export default Component;
