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
		"content": `<style>.fwszp4yzv {
  d: path("M10.5 21.25v-3.5a1.5 1.5 0 0 1 3 0v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uf1m1shwa {
  d: path("M8 20.25V9.5q0-1 .73-1.68l2.54-2.39q.73-.68 1.46 0l2.54 2.39Q16 8.5 16 9.5v10.75q0 1-1 1H9q-1 0-1-1M5.25 14.5v3.25m13.5-3.25v3.25");
}

.ypnipkd2y {
  width: 5.25px;
  height: 10px;
  x: 16px;
  y: 11.25px;
  rx: 1.25px;
}

.zn898bxjy {
  width: 5.25px;
  height: 10px;
  x: 2.75px;
  y: 11.25px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="zn898bxjy"/><rect class="ypnipkd2y"/><path class="uf1m1shwa"/><path class="fwszp4yzv"/></g>`,
		"fallback": "iconoven:campus",
	});
}

export default Component;
