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

.vryvk5bya {
  d: path("M15.25 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.xpo77kb3e {
  d: path("M2.5 20V8H4V5h3.5v3H9v12ZM9 13.5h3m0 0a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0");
}
</style><g class="hntgybcog"><path class="xpo77kb3e"/><path class="vryvk5bya"/></g>`,
		"fallback": "uix:engine-room",
	});
}

export default Component;
