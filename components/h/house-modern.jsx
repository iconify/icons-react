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
		"content": `<style>.afi60jb7g {
  d: path("M2.75 20.25V11.5q0-1 1-1H9.5q1 0 1-1V5.75q0-1 1-1h8.75q1 0 1 1v14.5q0 1-1 1H3.75q-1 0-1-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ubi3q_i8w {
  d: path("M13.75 8.25h4.5v4.5h-4.5ZM6 21.25v-5h2.5v5m5.25-4.75h4.5");
}
</style><g class="hntgybcog"><path class="afi60jb7g"/><path class="ubi3q_i8w"/></g>`,
		"fallback": "iconoven:house-modern",
	});
}

export default Component;
