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
		"content": `<style>.hd7oisk_e {
  d: path("M9 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-6 6h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rf8942b8g {
  d: path("M6.25 8H5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1.25");
}
</style><g class="hntgybcog"><path class="rf8942b8g"/><path class="hd7oisk_e"/></g>`,
		"fallback": "uix:honesty-box",
	});
}

export default Component;
