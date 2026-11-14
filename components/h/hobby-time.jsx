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
		"content": `<style>.ode5inb5s {
  d: path("M15.082 3.45A10.8 10.8 0 0 0 12 3c-5.5 0-9.5 4-9.5 9s4 9 8.5 9c1.5 0 2-1 1.5-2.5s.5-3 2-3H17c2.5 0 4.5-2 4.5-4.5a6.84 6.84 0 0 0-.979-3.504M7.5 9h.01M8 14.5h.01M21 3l-4.75 4.75");
}

.ssic-rbxl {
  d: path("M17 8.5L15.5 7l-2.25 2.25C12.25 10.25 12 12 12 12s1.75-.25 2.75-1.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ode5inb5s"/><path class="ssic-rbxl"/></g>`,
		"fallback": "uix-sharp:hobby-time",
	});
}

export default Component;
