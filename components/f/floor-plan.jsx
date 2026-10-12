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
		"content": `<style>.hhjm6hbgx {
  d: path("M4.25 2.75h15.5a1.5 1.5 0 0 1 1.5 1.5v15.5a1.5 1.5 0 0 1-1.5 1.5H4.25a1.5 1.5 0 0 1-1.5-1.5V4.25a1.5 1.5 0 0 1 1.5-1.5m7.75 0v6.5M2.75 12.5h5.5m3.75 0h9.25m-9.25 0v8.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwr3zms1n {
  d: path("M8.25 12.5v3.75A3.75 3.75 0 0 0 12 12.5");
}
</style><g class="hntgybcog"><path class="hhjm6hbgx"/><path class="xwr3zms1n"/></g>`,
		"fallback": "iconoven:floor-plan",
	});
}

export default Component;
