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

.kebju1mox {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3");
}

.p1dq7krho {
  fill: currentColor;
  d: path("M12 7s3.5 3.5 3.5 6a3.5 3.5 0 0 1-7 0c0-2.5 3.5-6 3.5-6");
}
</style><g class="hntgybcog"><path class="kebju1mox"/><path class="p1dq7krho"/></g>`,
		"fallback": "uix:colour-spot",
	});
}

export default Component;
