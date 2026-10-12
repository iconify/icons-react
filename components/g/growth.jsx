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
		"content": `<style>.h8g57eb3e {
  d: path("M5.25 18h13.5M12 14.75V9.5m0 1c0-3-2-5.25-5.75-5.25c0 3.25 2 5.25 5.75 5.25m0-2c0-3.25 2-5.5 5.75-5.75c0 3.5-2 5.75-5.75 5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mjh3w0bqy {
  width: 13.5px;
  height: 6.5px;
  x: 5.25px;
  y: 14.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="mjh3w0bqy"/><path class="h8g57eb3e"/></g>`,
		"fallback": "iconoven:growth",
	});
}

export default Component;
