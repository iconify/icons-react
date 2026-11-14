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

.pm9rn2zhp {
  d: path("M3 3.5L4.5 5L6 3.5L7.5 5L9 3.5v2a3 3 0 0 1-6 0Zm3 5v13M4 10.75l12 3.75M4 15.75L16 12m0 3.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.x1ydngbku {
  d: path("M16 11a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="pm9rn2zhp"/><path class="x1ydngbku"/></g>`,
		"fallback": "uix:deadheading",
	});
}

export default Component;
