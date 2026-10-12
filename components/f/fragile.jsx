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
		"content": `<style>.h843t7bio {
  d: path("M8.75 7h6.5l-.45 3.4a2.85 2.85 0 0 1-5.6 0ZM12 13.25v4m-2.25 0h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ru6wkbb1e {
  width: 18.5px;
  height: 17.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="ru6wkbb1e"/><path class="h843t7bio"/></g>`,
		"fallback": "iconoven:fragile",
	});
}

export default Component;
