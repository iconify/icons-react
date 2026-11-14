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

.prkr2ccod {
  d: path("M13.5 21v-3.5h-6c-3 0-5-2.25-5-5.5c0-4.75 4-8 9-8c5.5 0 10 3.25 10 7.5c0 3.25-2.25 6-5 6V21");
}

.vov89fb0r {
  d: path("M6.5 10.5c2.5-3 4.5 2.5 7 0c1.5-1.5 3-1 4 .5");
}
</style><g class="hntgybcog"><path class="prkr2ccod"/><path class="vov89fb0r"/></g>`,
		"fallback": "uix:brain-side",
	});
}

export default Component;
