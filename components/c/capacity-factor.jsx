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
		"content": `<style>.d066c0brd {
  d: path("M5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2.5-8l-11 10m-1.25 3.5h13.5A2.25 2.25 0 0 1 21 18.75A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75a2.25 2.25 0 0 1 2.25-2.25");
}

.eozd99lwm {
  fill: currentColor;
  d: path("M5.25 16.5h8a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 13.25 21h-8A2.25 2.25 0 0 1 3 18.75a2.25 2.25 0 0 1 2.25-2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d066c0brd"/><path class="eozd99lwm"/></g>`,
		"fallback": "uix:capacity-factor",
	});
}

export default Component;
