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
		"content": `<style>.b96pc7bbs {
  d: path("M6.5 16.5h3m5 0h3M4.25 11.75l13.75-8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3b4orb3k {
  width: 18.5px;
  height: 8.5px;
  x: 2.75px;
  y: 11.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="v3b4orb3k"/><path class="b96pc7bbs"/></g>`,
		"fallback": "iconoven:dumpster",
	});
}

export default Component;
