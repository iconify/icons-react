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
		"content": `<style>.ad-utccym {
  d: path("m6.75 19.5l-1.5 1.75M20.5 6.5l-3.25-2.75m-13.5 0l16.5 16.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.owcfk0-vx {
  cx: 12px;
  cy: 12.75px;
  r: 7.5px;
}
</style><g class="hntgybcog"><circle class="owcfk0-vx"/><path class="ad-utccym"/></g>`,
		"fallback": "iconoven:alarm-off",
	});
}

export default Component;
