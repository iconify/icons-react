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
		"content": `<style>.a6cifuo-f {
  d: path("M7.25 17.75h9.5M12 14.25V2.75M8.75 6L12 2.75L15.25 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nahtygbdq {
  width: 16.5px;
  height: 13px;
  x: 3.75px;
  y: 8.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="nahtygbdq"/><path class="a6cifuo-f"/></g>`,
		"fallback": "iconoven:context-overflow",
	});
}

export default Component;
