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

.i93y9wwiw {
  d: path("M12.25 21.5a9.5 9.5 0 1 1 9.25-9.25h-7.25a2 2 0 0 0-2 2Z");
}

.rri6mjrmc {
  d: path("M10.75 6.25v4.5h-3.5M15 15.5l2.5 2.5l-2.5 2.5m3.5-5L21 18l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="i93y9wwiw"/><path class="rri6mjrmc"/></g>`,
		"fallback": "uix:clock-fast-forward",
	});
}

export default Component;
