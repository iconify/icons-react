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

.l5bsdl__e {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.25 1.75L17 12l-1.75 5.5");
}

.v4r7y6xgc {
  d: path("M12.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10.75 6.25L6.5 12l-3 8m3-8l3 8m7.5-8l3.5 8");
}
</style><g class="hntgybcog"><path class="l5bsdl__e"/><path class="v4r7y6xgc"/></g>`,
		"fallback": "uix:beam-search",
	});
}

export default Component;
