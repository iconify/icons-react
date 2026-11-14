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

.j2-u11bsh {
  d: path("M10.25 10a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.k8g0vix5z {
  d: path("M3.5 7A1.5 1.5 0 0 1 5 5.5h2L8.5 3h7L17 5.5h2A1.5 1.5 0 0 1 20.5 7v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 13ZM3 19.5h18m-6-2.25v4.5");
}
</style><g class="hntgybcog"><path class="k8g0vix5z"/><path class="j2-u11bsh"/></g>`,
		"fallback": "uix:camera-timeline",
	});
}

export default Component;
