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
		"content": `<style>.el14-2bzp {
  d: path("M8.25 12.75q3.75 1.875 7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nmtyawb_f {
  d: path("M5.25 20.25c-1.75 0-2.25-1.5-1.75-3C4.75 13.25 6.75 8 9 5.5c1.75-2 4.25-2 6 0c2.25 2.5 4.25 7.75 5.5 11.75c.5 1.5 0 3-1.75 3Z");
}
</style><g class="hntgybcog"><path class="nmtyawb_f"/><path class="el14-2bzp"/></g>`,
		"fallback": "iconoven:bean-bag",
	});
}

export default Component;
