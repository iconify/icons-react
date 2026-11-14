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
		"content": `<style>.b7rg5zbhw {
  d: path("m4 14.5l7.5-4.5l-1.75-3l-7.5 4.5Zm2.5 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.gkakjv-yy {
  d: path("M4 14.5h17.5v-4l-3-4H15v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gkakjv-yy"/><path class="b7rg5zbhw"/></g>`,
		"fallback": "uix:dump-truck",
	});
}

export default Component;
