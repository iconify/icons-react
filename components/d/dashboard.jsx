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

.k897l6oig {
  width: 8px;
  height: 9.5px;
  x: 13.25px;
  y: 11.75px;
  rx: 2px;
}

.qs6cjbv5h {
  width: 7.5px;
  height: 9.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.ucy90yfxt {
  width: 8px;
  height: 6px;
  x: 13.25px;
  y: 2.75px;
  rx: 2px;
}

.vi02avdma {
  width: 7.5px;
  height: 6px;
  x: 2.75px;
  y: 15.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="qs6cjbv5h"/><rect class="ucy90yfxt"/><rect class="vi02avdma"/><rect class="k897l6oig"/></g>`,
		"fallback": "iconoven:dashboard",
	});
}

export default Component;
