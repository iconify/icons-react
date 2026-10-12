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
		"content": `<style>.h-nwtrb3j {
  d: path("M8.5 2.75H13m-2.25 0v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w4ex0mgcf {
  d: path("M5.25 12.5h11m0-2.75h2a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-2");
}

.wjh-ymbjd {
  width: 11px;
  height: 14px;
  x: 5.25px;
  y: 7.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="h-nwtrb3j"/><rect class="wjh-ymbjd"/><path class="w4ex0mgcf"/></g>`,
		"fallback": "iconoven:french-press",
	});
}

export default Component;
