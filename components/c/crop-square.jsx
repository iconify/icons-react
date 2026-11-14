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

.ib3gs6bzn {
  d: path("M6 2.5V16a2 2 0 0 0 2 2h13.5");
}

.jvf3gm4qy {
  d: path("M10.75 9h2.5A1.75 1.75 0 0 1 15 10.75v2.5A1.75 1.75 0 0 1 13.25 15h-2.5A1.75 1.75 0 0 1 9 13.25v-2.5A1.75 1.75 0 0 1 10.75 9");
}

.vu5ir404e {
  d: path("M2.5 6H16a2 2 0 0 1 2 2v13.5");
}
</style><g class="hntgybcog"><path class="ib3gs6bzn"/><path class="vu5ir404e"/><path class="jvf3gm4qy"/></g>`,
		"fallback": "uix:crop-square",
	});
}

export default Component;
