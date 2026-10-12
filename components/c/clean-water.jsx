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

.ldzsy3bwp {
  d: path("M10.5 4.25c3.5 3.9 5.75 7.2 5.75 10.25a5.75 5.75 0 0 1-11.5 0c0-3.05 2.25-6.35 5.75-10.25");
}

.vgewaswlr {
  d: path("M7.75 15A2.75 2.75 0 0 0 10 17.5m8.25-14.75q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}
</style><g class="hntgybcog"><path class="ldzsy3bwp"/><path class="vgewaswlr"/></g>`,
		"fallback": "iconoven:clean-water",
	});
}

export default Component;
