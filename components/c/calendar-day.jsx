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
		"content": `<style>.ea2ec-tvv {
  width: 5.5px;
  height: 5px;
  x: 9.25px;
  y: 12.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ksiibsbdf {
  width: 16.5px;
  height: 15px;
  x: 3.75px;
  y: 5.25px;
  rx: 2.5px;
}

.ue0nez8sv {
  d: path("M3.75 10h16.5M8 2.75v4.5m8-4.5v4.5");
}
</style><g class="hntgybcog"><rect class="ksiibsbdf"/><path class="ue0nez8sv"/><rect class="ea2ec-tvv"/></g>`,
		"fallback": "iconoven:calendar-day",
	});
}

export default Component;
