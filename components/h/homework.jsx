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

.jtiiznbsj {
  d: path("M3.75 7.25H7.5M3.75 12H7.5m-3.75 4.75H7.5m11-11.25h1.25q1 0 1 1v9.75q0 1-.45 1.89l-.72 1.47q-.45.89-.9 0l-.73-1.47q-.45-.89-.45-1.89V6.5q0-1 1-1m-1 3.25h3.25");
}

.zhaiq6g-e {
  width: 8.75px;
  height: 18.5px;
  x: 6px;
  y: 2.75px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><rect class="zhaiq6g-e"/><path class="jtiiznbsj"/></g>`,
		"fallback": "iconoven:homework",
	});
}

export default Component;
