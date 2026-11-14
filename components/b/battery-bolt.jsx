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
		"content": `<style>.db2cyynzf {
  d: path("m13 8l-2.75 5h3.5L11 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xjynd28eq {
  d: path("M10.875 4.75h2.25A4.375 4.375 0 0 1 17.5 9.125v8a4.375 4.375 0 0 1-4.375 4.375h-2.25A4.375 4.375 0 0 1 6.5 17.125v-8a4.375 4.375 0 0 1 4.375-4.375m-.875-2h4");
}
</style><g class="hntgybcog"><path class="xjynd28eq"/><path class="db2cyynzf"/></g>`,
		"fallback": "uix:battery-bolt",
	});
}

export default Component;
