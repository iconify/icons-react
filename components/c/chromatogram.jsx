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
		"content": `<style>.e2rc6ibxb {
  d: path("M5 20.5C6.75 20.5 6.75 8 7.75 8s1 12.5 2.75 12.5c1.5 0 1.5-7 2.5-7s1 7 2.5 7s1.5-16 2.5-16s1 16 2.75 16");
}

.fffd9ib1u {
  d: path("M3 3v17.5h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fffd9ib1u"/><path class="e2rc6ibxb"/></g>`,
		"fallback": "uix:chromatogram",
	});
}

export default Component;
