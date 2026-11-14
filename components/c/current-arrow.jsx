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
		"content": `<style>.ggoickbzw {
  d: path("M3 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-u1jtb1j {
  d: path("M16.75 9.75L19 12l2.25-2.25");
}
</style><g class="hntgybcog"><path class="ggoickbzw"/><path class="x-u1jtb1j"/></g>`,
		"fallback": "uix:current-arrow",
	});
}

export default Component;
