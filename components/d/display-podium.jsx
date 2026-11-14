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

.m3qvxmcts {
  d: path("M4 13.5a8 2.75 0 1 0 16 0a8 2.75 0 1 0-16 0");
}

.p404z1n9w {
  d: path("M9 3h6a1.5 1.5 0 0 1 1.5 1.5V10a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 10V4.5A1.5 1.5 0 0 1 9 3M7.5 6h9M12 3v3");
}

.z7scqubjs {
  d: path("M4 13.5v5a8 2.75 0 0 0 16 0v-5");
}
</style><g class="hntgybcog"><path class="z7scqubjs"/><path class="m3qvxmcts"/><path class="p404z1n9w"/></g>`,
		"fallback": "uix:display-podium",
	});
}

export default Component;
