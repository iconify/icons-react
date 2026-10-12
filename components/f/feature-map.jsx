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

.pbo9s0bgf {
  d: path("M2.75 14.75v-9.5a2.5 2.5 0 0 1 2.5-2.5h9.5M5.75 18V8.25a2.5 2.5 0 0 1 2.5-2.5H18");
}

.qz5af5-yy {
  width: 12.5px;
  height: 12.5px;
  x: 8.75px;
  y: 8.75px;
  rx: 2.5px;
}

.v3l3mtbse {
  d: path("M15 8.75v12.5M8.75 15h12.5");
}
</style><g class="hntgybcog"><path class="pbo9s0bgf"/><rect class="qz5af5-yy"/><path class="v3l3mtbse"/></g>`,
		"fallback": "iconoven:feature-map",
	});
}

export default Component;
