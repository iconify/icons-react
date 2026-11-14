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

.r_g-h8b-z {
  d: path("M14.071 4.273a8 8 0 0 1 0 15.454m-4.142 0a8 8 0 0 1 0-15.454");
}

.w58fw3bzy {
  d: path("m2.5 17l1.75-3l3 1.75M21.5 7l-1.75 3l-3-1.75M12 8v4l3 1.75");
}
</style><g class="hntgybcog"><path class="r_g-h8b-z"/><path class="w58fw3bzy"/></g>`,
		"fallback": "uix:cycle-time",
	});
}

export default Component;
