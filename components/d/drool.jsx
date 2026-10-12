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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qgr1io_pn {
  d: path("M7.75 10c.6-.75 1.9-.75 2.5 0m3.5 0c.6-.75 1.9-.75 2.5 0M8.5 14.25c1.75 1.15 3.9 1.4 6.25.5");
}

.x1mvjrb9c {
  d: path("M14 14.5c.75 1.1 1.25 1.85 1.25 2.5a1.25 1.25 0 0 1-2.5 0c0-.65.5-1.4 1.25-2.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="qgr1io_pn"/><path class="x1mvjrb9c"/></g>`,
		"fallback": "iconoven:drool",
	});
}

export default Component;
