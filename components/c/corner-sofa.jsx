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

.ttacz7bun {
  d: path("M4.75 10.5V7a2.5 2.5 0 0 1 2.5-2.5h9.5a2.5 2.5 0 0 1 2.5 2.5v3.5");
}

.v7xd-6t_l {
  d: path("M2.75 12.5a2 2 0 0 1 4 0v1.25h10.5V12.5a2 2 0 0 1 4 0v5.25a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2Zm2.5 7.25v1.5m13.5-1.5v1.5");
}
</style><g class="hntgybcog"><path class="ttacz7bun"/><path class="v7xd-6t_l"/></g>`,
		"fallback": "iconoven:corner-sofa",
	});
}

export default Component;
