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
		"content": `<style>.fr9wc8ere {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v201m2bhf {
  d: path("M2.75 7.75h18.5M6.5 11l1.75 1.5L6.5 14m4.25-1.5h6.75m-11 4h11");
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><path class="v201m2bhf"/></g>`,
		"fallback": "iconoven:console-log",
	});
}

export default Component;
