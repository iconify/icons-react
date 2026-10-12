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
		"content": `<style>.c7sggvbej {
  d: path("M5.75 8.75H10m-4.25 6H10m3.25-3.5h4.25m-4.25 5h4.25m0-5.25c.25-2.5 1.75-4 3.75-4.5q-.375 3.375-3.75 4.5");
}

.chis5dbqg {
  width: 4.25px;
  height: 18.5px;
  x: 5.75px;
  y: 2.75px;
  rx: 1.25px;
}

.g7x6l_8xr {
  width: 4.25px;
  height: 15px;
  x: 13.25px;
  y: 6.25px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="chis5dbqg"/><rect class="g7x6l_8xr"/><path class="c7sggvbej"/></g>`,
		"fallback": "iconoven:bamboo",
	});
}

export default Component;
