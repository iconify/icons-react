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
		"content": `<style>.bywa281xq {
  d: path("M9.5 6.63h5");
}

.dn4p92b7r {
  width: 15.5px;
  height: 8.75px;
  x: 4.25px;
  y: 12.5px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i1_2xsftx {
  width: 18.5px;
  height: 6.75px;
  x: 2.75px;
  y: 3.25px;
  rx: 2px;
}

.zev7nzb0i {
  d: path("M8.13 12.5v8.75M12 12.5v8.75m3.88-8.75v8.75");
}
</style><g class="hntgybcog"><rect class="i1_2xsftx"/><path class="bywa281xq"/><rect class="dn4p92b7r"/><path class="zev7nzb0i"/></g>`,
		"fallback": "iconoven:cash-drawer",
	});
}

export default Component;
