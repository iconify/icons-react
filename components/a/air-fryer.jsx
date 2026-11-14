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
		"content": `<style>.h4dgr8bcl {
  d: path("M9 9.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0M4 15h16m-10 3h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mly3sybza {
  d: path("M4 21.25V9a8 6.5 0 0 1 16 0v12.25Z");
}
</style><g class="hntgybcog"><path class="mly3sybza"/><path class="h4dgr8bcl"/></g>`,
		"fallback": "uix:air-fryer",
	});
}

export default Component;
