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
		"content": `<style>.cc13u7miy {
  d: path("M10.25 5.5h3.5A5.25 5.25 0 0 1 19 10.75v5.5a5.25 5.25 0 0 1-5.25 5.25h-3.5A5.25 5.25 0 0 1 5 16.25v-5.5a5.25 5.25 0 0 1 5.25-5.25m-.75 0a2.5 2.5 0 0 1 5 0M5 9.5h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ixau_rbxc {
  d: path("M9 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="cc13u7miy"/><path class="ixau_rbxc"/></g>`,
		"fallback": "uix:camera-backpack",
	});
}

export default Component;
