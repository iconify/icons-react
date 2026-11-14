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
		"content": `<style>.h9p_uac7a {
  d: path("M4 17V9c0-2.5 2-4 4-4h8c2 0 4 1.5 4 4v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipqviubhm {
  d: path("M6.5 12h11a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 14.5A2.5 2.5 0 0 1 6.5 12M6 20.5V17m12 3.5V17");
}
</style><g class="hntgybcog"><path class="h9p_uac7a"/><path class="ipqviubhm"/></g>`,
		"fallback": "uix:booth-seating",
	});
}

export default Component;
