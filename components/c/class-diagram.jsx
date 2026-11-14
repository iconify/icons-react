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
		"content": `<style>.atd-tvb0c {
  d: path("M11 16.625za1.013 1.013 0 0 1 0 1.75a.997.997 0 0 1-1.5-.862v-.026a.997.997 0 0 1 1.5-.862");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vuw916gog {
  d: path("M4.25 2.5h5.5a1.75 1.75 0 0 1 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 2.5 8.75v-4.5A1.75 1.75 0 0 1 4.25 2.5m10 11h5.5a1.75 1.75 0 0 1 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75v-4.5a1.75 1.75 0 0 1 1.75-1.75M2.5 5.5h9m1 11h9M7 10.5v7h2.5");
}
</style><g class="hntgybcog"><path class="vuw916gog"/><path class="atd-tvb0c"/></g>`,
		"fallback": "uix:class-diagram",
	});
}

export default Component;
