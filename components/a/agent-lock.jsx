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
		"content": `<style>.ajad1cb2q {
  d: path("M12.367 21H3.5c-.6 0-1-.4-1-1c0-2.75 2.9-4.5 6.5-4.5c1.598 0 3.057.345 4.187.968M6.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.h773auepu {
  d: path("M4 11.5V9a5 5 0 0 1 10 0v1.5m-10 1c0 1.25.75 2 2.25 2m10.5 4h2.5A1.75 1.75 0 0 1 21 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75m-.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ajad1cb2q"/><path class="h773auepu"/></g>`,
		"fallback": "uix:agent-lock",
	});
}

export default Component;
