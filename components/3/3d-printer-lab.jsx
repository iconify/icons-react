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

.t-_x2bc-j {
  d: path("M6.5 12.75L10 14.5l3.5-1.75M10 14.5v4m-7.5 3h9.7M17 15v2.75l-2 3.75h6l-2-3.75V15m-2.75 0h3.5");
}

.u0b6tsbau {
  d: path("M7 2.5h6V5l-3 3l-3-3Zm3 8.5l3.5 1.75v4L10 18.5l-3.5-1.75v-4Z");
}
</style><g class="hntgybcog"><path class="u0b6tsbau"/><path class="t-_x2bc-j"/></g>`,
		"fallback": "uix:3d-printer-lab",
	});
}

export default Component;
