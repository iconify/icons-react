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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.gc466zcla {
  d: path("M7.5 4v1.25A2.75 2.75 0 0 0 10.25 8A1.75 1.75 0 0 1 12 9.75a1.75 1.75 0 0 0 3.5 0A1.75 1.75 0 0 1 17.25 8h3m.5 6.75h-4A1.75 1.75 0 0 0 15 16.5v4.25M11 21v-3.25A1.75 1.75 0 0 0 9.25 16a1.75 1.75 0 0 1-1.75-1.75v-.75a1.75 1.75 0 0 0-1.75-1.75h-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="gc466zcla"/></g>`,
		"fallback": "iconoven:earth",
	});
}

export default Component;
