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

.skh6m6vww {
  d: path("M12 7.5v8.75m3.75-3.75L12 16.25L8.25 12.5");
}

.t0jrdmbrp {
  width: 17.5px;
  height: 17.5px;
  x: 3.25px;
  y: 3.25px;
  rx: 4px;
}
</style><g class="hntgybcog"><rect class="t0jrdmbrp"/><path class="skh6m6vww"/></g>`,
		"fallback": "iconoven:arrow-down-square",
	});
}

export default Component;
