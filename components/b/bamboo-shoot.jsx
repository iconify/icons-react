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
		"content": `<style>.fg-_bobtm {
  d: path("M8.75 15.25Q12 17 15.5 15m-5.75-4.5q2.75 1.25 5.25-.25m-.75-3.75q2.25-3 5.25-3.5M4 20.5h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uo9-5sdbh {
  d: path("M8.5 20.5c0-7.5 2-12.5 5-16.5c1.5 5 2 10 2 16.5");
}
</style><g class="hntgybcog"><path class="uo9-5sdbh"/><path class="fg-_bobtm"/></g>`,
		"fallback": "uix:bamboo-shoot",
	});
}

export default Component;
