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

.qhufbmb5s {
  d: path("M14.5 11.6a2 2 0 1 1 3.6 1.2l-3.6 3.95h4");
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
</style><g class="hntgybcog"><path class="qo8f3buxs"/><rect class="qyepnrbgy"/><path class="qhufbmb5s"/></g>`,
		"fallback": "iconoven:heading-2",
	});
}

export default Component;
