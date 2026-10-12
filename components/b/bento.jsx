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

.la5qfrrxr {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2.5px;
}

.nd7vd2kjb {
  d: path("M11.75 5.25v13.5m0-6.75h9.5m-14-2a2 2 0 1 1 0 4a2 2 0 1 1 0-4");
}
</style><g class="hntgybcog"><rect class="la5qfrrxr"/><path class="nd7vd2kjb"/></g>`,
		"fallback": "iconoven:bento",
	});
}

export default Component;
