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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydwdsob3c {
  d: path("M9.4 10c.11-.24.12-.56-.03-.87c-.15-.3-.46-.57-.87-.68s-.9-.05-1.33.22c-.42.27-.76.75-.87 1.33s.02 1.24.41 1.79c.4.54 1.04.95 1.79 1.06M14.6 10c-.11-.24-.12-.56.03-.87c.15-.3.46-.57.87-.68s.9-.05 1.33.22c.42.27.76.75.87 1.33s-.02 1.24-.41 1.79c-.4.54-1.04.95-1.79 1.06m-6.25 3.9c.5-.7 1.33-.7 1.83 0s1.33.7 1.83 0s1.33-.7 1.83 0");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="ydwdsob3c"/></g>`,
		"fallback": "iconoven:face-dizzy",
	});
}

export default Component;
