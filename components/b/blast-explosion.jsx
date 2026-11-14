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
		"content": `<style>.df4-_ruwd {
  d: path("M8 20.5L9.5 16l2.5 1.5l2.5-2.5l1.5 5.5M4 4.5h.01m16.49-1h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ryt3_15ix {
  d: path("M3 20.5L5.5 14l-2-4.5L8 11l1.5-6.5l3 5l3.5-6l.5 6.5l4-1.5l-2 5.5l2.5 6.5Z");
}
</style><g class="hntgybcog"><path class="ryt3_15ix"/><path class="df4-_ruwd"/></g>`,
		"fallback": "uix:blast-explosion",
	});
}

export default Component;
