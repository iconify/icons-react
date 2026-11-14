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
		"content": `<style>.b4ouzns0p {
  d: path("M12 4za1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 12 4m5 11s-2.25 2.5-2.25 4a2.25 2.25 0 0 0 4.5 0c0-1.5-2.25-4-2.25-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o3xyavuxm {
  d: path("M2.5 6H14a3 3 0 0 1 3 3v3");
}
</style><g class="hntgybcog"><path class="o3xyavuxm"/><path class="b4ouzns0p"/></g>`,
		"fallback": "uix:home-leak",
	});
}

export default Component;
