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
		"content": `<style>.gjzoqze8y {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vsz1w2cug {
  d: path("m17.131 5.3l3.238 5.606a2.19 2.19 0 0 1 0 2.188L17.131 18.7a2.19 2.19 0 0 1-1.894 1.094H8.763A2.19 2.19 0 0 1 6.869 18.7l-3.238-5.606a2.19 2.19 0 0 1 0-2.188L6.869 5.3a2.19 2.19 0 0 1 1.894-1.094h6.474A2.19 2.19 0 0 1 17.131 5.3");
}
</style><g class="hntgybcog"><path class="vsz1w2cug"/><path class="gjzoqze8y"/></g>`,
		"fallback": "uix:hex-nut",
	});
}

export default Component;
