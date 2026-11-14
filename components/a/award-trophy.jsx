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

.iw83-1biy {
  d: path("M7 3.5h10V9A5 5 0 0 1 7 9Zm2.75 14h4.5A1.75 1.75 0 0 1 16 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75");
}

.o-ixaubjk {
  d: path("M7 5.5H5a2.5 2.5 0 0 0 0 5h2.25m9.75-5h2a2.5 2.5 0 0 1 0 5h-2.25M12 14v3.5");
}
</style><g class="hntgybcog"><path class="iw83-1biy"/><path class="o-ixaubjk"/></g>`,
		"fallback": "uix:award-trophy",
	});
}

export default Component;
