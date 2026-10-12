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

.mcpohmiso {
  cx: 8.5px;
  cy: 10.5px;
  r: 2px;
}

.ucxu3gbut {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2.5px;
}

.yw_-ek1oe {
  d: path("M5.75 16c.5-1.3 1.6-2 2.75-2s2.25.7 2.75 2M14 10h3.75M14 13.5h2.5");
}
</style><g class="hntgybcog"><rect class="ucxu3gbut"/><circle class="mcpohmiso"/><path class="yw_-ek1oe"/></g>`,
		"fallback": "iconoven:id-renewal",
	});
}

export default Component;
