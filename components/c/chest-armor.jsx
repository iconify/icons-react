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

.p1erp238d {
  d: path("M5.5 16c4 1.75 9 1.75 13 0");
}

.x4huqxfkr {
  d: path("M6.5 3.25H9C9.5 5 10.5 6 12 6s2.5-1 3-2.75h2.5c.25 2.75 1.25 4.5 3.25 5.25l-1 6.5C19.5 18.5 16 21.25 12 21.25S4.5 18.5 4.25 15l-1-6.5c2-.75 3-2.5 3.25-5.25M12 9v5");
}
</style><g class="hntgybcog"><path class="x4huqxfkr"/><path class="p1erp238d"/></g>`,
		"fallback": "iconoven:chest-armor",
	});
}

export default Component;
