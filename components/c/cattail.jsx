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
		"content": `<style>.ezrzdhswm {
  d: path("M9.25 12v9.25m0-16.75V2.75M16 14v7.25M16 7.5V5.75m-3.5 15.5c.25-3.5-.25-6.5-1.25-8.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mw7l5rs4l {
  width: 3.5px;
  height: 6.5px;
  x: 14.25px;
  y: 7.5px;
  rx: 1.75px;
}

.wrmy9klhs {
  width: 3.5px;
  height: 7.5px;
  x: 7.5px;
  y: 4.5px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="wrmy9klhs"/><rect class="mw7l5rs4l"/><path class="ezrzdhswm"/></g>`,
		"fallback": "iconoven:cattail",
	});
}

export default Component;
