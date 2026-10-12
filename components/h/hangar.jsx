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
		"content": `<style>.elpjnkr8g {
  d: path("M12 14.75v6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l8_s48gkv {
  d: path("M6.25 13.25a5.75 5.75 0 0 1 11.5 0");
}

.x0p5j-4im {
  d: path("M2.75 21.25V13.5a9.25 9 0 0 1 18.5 0v7.75Z");
}

.yjgxnmilc {
  width: 11px;
  height: 6.5px;
  x: 6.5px;
  y: 14.75px;
  rx: 0.5px;
}
</style><g class="hntgybcog"><path class="x0p5j-4im"/><path class="l8_s48gkv"/><rect class="yjgxnmilc"/><path class="elpjnkr8g"/></g>`,
		"fallback": "iconoven:hangar",
	});
}

export default Component;
