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
		"content": `<style>.f306-y_-p {
  d: path("M9.25 8.25h12m-12 7.5h12m-15-7.25L2.75 12l3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xbn7f4blr {
  width: 12px;
  height: 14.5px;
  x: 9.25px;
  y: 4.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="xbn7f4blr"/><path class="f306-y_-p"/></g>`,
		"fallback": "iconoven:frame-back",
	});
}

export default Component;
