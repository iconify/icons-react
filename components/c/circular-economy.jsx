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
		"content": `<style>.asicp58sr {
  d: path("M15.625 5.721A7.25 7.25 0 0 1 12 19.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kga-n674e {
  d: path("M9.75 2.5L12 4.75L9.75 7M8 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.peitiepcq {
  d: path("M14.25 17L12 19.25l2.25 2.25m-5.875-3.221A7.25 7.25 0 0 1 12 4.75");
}

.v6cjenbyp {
  d: path("M11 9h2a3 3 0 0 1 0 6h-2");
}
</style><g class="hntgybcog"><path class="asicp58sr"/><path class="peitiepcq"/><path class="kga-n674e"/><path class="v6cjenbyp"/></g>`,
		"fallback": "uix:circular-economy",
	});
}

export default Component;
