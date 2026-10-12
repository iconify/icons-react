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
		"content": `<style>.djn6lybgu {
  width: 16px;
  height: 18.5px;
  x: 4px;
  y: 2.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m4nplmbvh {
  d: path("M12 9.75L14 8m-5.5 9.25h7");
}

.rd87urb9k {
  cx: 12px;
  cy: 9.75px;
  r: 4px;
}
</style><g class="hntgybcog"><rect class="djn6lybgu"/><circle class="rd87urb9k"/><path class="m4nplmbvh"/></g>`,
		"fallback": "iconoven:energy-meter",
	});
}

export default Component;
