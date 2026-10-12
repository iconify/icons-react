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

.l-um5yb9v {
  width: 4px;
  height: 6.5px;
  x: 3.75px;
  y: 12.75px;
  rx: 1.5px;
}

.s1lugtbjv {
  d: path("M3.75 15v-3a8.25 8.25 0 0 1 16.5 0v3m-2 4.25v.25a1.75 1.75 0 0 1-1.75 1.75h-3");
}

.zp4mwtatd {
  width: 4px;
  height: 6.5px;
  x: 16.25px;
  y: 12.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="s1lugtbjv"/><rect class="l-um5yb9v"/><rect class="zp4mwtatd"/></g>`,
		"fallback": "iconoven:headset",
	});
}

export default Component;
