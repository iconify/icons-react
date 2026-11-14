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
		"content": `<style>.g_cnefbac {
  d: path("M12 16.25c0-1.52-1.12-2.43-3-2.5c.07 1.65 1.2 2.55 3 2.5m0-.75c0-1.9 1.13-3.25 3-3.25c-.07 1.8-1.2 3.15-3 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uk05n2bwm {
  d: path("M7 4.5h10A3.5 3.5 0 0 1 20.5 8v9a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V8A3.5 3.5 0 0 1 7 4.5M8 3v3.5M16 3v3.5M3.5 9h17M12 18.5v-3");
}
</style><g class="hntgybcog"><path class="uk05n2bwm"/><path class="g_cnefbac"/></g>`,
		"fallback": "uix:crop-calendar",
	});
}

export default Component;
