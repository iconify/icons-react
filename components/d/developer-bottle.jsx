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
		"content": `<style>.a2ii9-bhz {
  d: path("M10.5 12h3a1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 16v-2.5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z32-znt-c {
  d: path("M9.5 2.5h5V6L18 9v10.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9l3.5-3Z");
}
</style><g class="hntgybcog"><path class="z32-znt-c"/><path class="a2ii9-bhz"/></g>`,
		"fallback": "uix:developer-bottle",
	});
}

export default Component;
