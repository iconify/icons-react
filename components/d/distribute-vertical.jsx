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

.p7fqmbcmq {
  width: 12.5px;
  height: 6px;
  x: 5.75px;
  y: 9px;
  rx: 1.5px;
}

.zhclxacbk {
  d: path("M2.75 3.75h18.5m-18.5 16.5h18.5");
}
</style><g class="hntgybcog"><path class="zhclxacbk"/><rect class="p7fqmbcmq"/></g>`,
		"fallback": "iconoven:distribute-vertical",
	});
}

export default Component;
