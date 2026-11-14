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
		"content": `<style>.df3ik9obg {
  d: path("M7 18.5h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 10a4.25 4.25 0 0 0 1 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ucf-3acpg {
  d: path("m13 9l-2.5 3.5h3L11 16");
}
</style><g class="hntgybcog"><path class="df3ik9obg"/><path class="ucf-3acpg"/></g>`,
		"fallback": "uix:cdn-cache",
	});
}

export default Component;
