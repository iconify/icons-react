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
		"content": `<style>.gt-o93uyn {
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vuk36hbzn {
  d: path("m12 7.5l3 4.25L12 16l-3-4.25Zm0 8.5l3.5 5.5h-7Z");
}
</style><g class="hntgybcog"><path class="gt-o93uyn"/><path class="vuk36hbzn"/></g>`,
		"fallback": "uix:day-shapes",
	});
}

export default Component;
