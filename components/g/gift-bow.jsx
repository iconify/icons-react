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

.mbf6vr-el {
  width: 17.5px;
  height: 4.25px;
  x: 3.25px;
  y: 7.25px;
  rx: 1.25px;
}

.siq_r9b4a {
  d: path("M4.75 14h14.5v5.25a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2ZM12 7.25v14m0-14H8.75a2 2 0 1 1 0-4c1.75 0 2.75 2 3.25 4m0 0h3.25a2 2 0 1 0 0-4c-1.75 0-2.75 2-3.25 4");
}
</style><g class="hntgybcog"><rect class="mbf6vr-el"/><path class="siq_r9b4a"/></g>`,
		"fallback": "iconoven:gift-bow",
	});
}

export default Component;
