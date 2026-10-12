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
		"content": `<style>.h_le0lbwj {
  d: path("M15.25 8.75v-3.5a2.5 2.5 0 0 0-2.5-2.5h-7.5a2.5 2.5 0 0 0-2.5 2.5v7.5a2.5 2.5 0 0 0 2.5 2.5h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qz5af5-yy {
  width: 12.5px;
  height: 12.5px;
  x: 8.75px;
  y: 8.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="qz5af5-yy"/><path class="h_le0lbwj"/></g>`,
		"fallback": "iconoven:copy-code",
	});
}

export default Component;
