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
		"content": `<style>.c6z-1yomj {
  d: path("M6 10h4.25M6 14h2.75m7-5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-3 3h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.la5qfrrxr {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="la5qfrrxr"/><path class="c6z-1yomj"/></g>`,
		"fallback": "iconoven:driver-license",
	});
}

export default Component;
