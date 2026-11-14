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
		"content": `<style>.h9top6bko {
  d: path("M4.25 18h7A1.75 1.75 0 0 1 13 19.75a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 4.25 18M13 19.75c4 0 5-4.75 5-11.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xw5o89bmn {
  d: path("m19.275 4.81l.558.9A1.5 1.5 0 0 1 18.557 8h-1.114a1.5 1.5 0 0 1-1.276-2.29l.558-.9a1.5 1.5 0 0 1 2.55 0");
}
</style><g class="hntgybcog"><path class="h9top6bko"/><path class="xw5o89bmn"/></g>`,
		"fallback": "uix:departure-route",
	});
}

export default Component;
