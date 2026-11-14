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

.j21s3r_de {
  d: path("M10 21.5v-3a2 2 0 0 1 4 0v3M12 6.25c-1.5-1 1.5-2.75 0-3.75");
}

.zhqjambpz {
  d: path("M4.5 21.5C4 16 7 13 10 10.5V9h4v1.5c3 2.5 6 5.5 5.5 11Z");
}
</style><g class="hntgybcog"><path class="zhqjambpz"/><path class="j21s3r_de"/></g>`,
		"fallback": "uix:bottle-kiln",
	});
}

export default Component;
