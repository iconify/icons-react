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

.qo8f3buxs {
  d: path("M3 4.75v14.5m5.75-14.5v14.5M3 12h5.75");
}

.qyepnrbgy {
  width: 9.5px;
  height: 12px;
  x: 11.75px;
  y: 7.25px;
  rx: 2.5px;
}

.vtal1uetk {
  d: path("M17.5 16.75V10L14 14.75h5");
}
</style><g class="hntgybcog"><path class="qo8f3buxs"/><rect class="qyepnrbgy"/><path class="vtal1uetk"/></g>`,
		"fallback": "iconoven:heading-4",
	});
}

export default Component;
