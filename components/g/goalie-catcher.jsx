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
		"content": `<style>.agzwz9bjo {
  d: path("M7 12c2.5 2.25 7 2.25 10-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-hptyjow {
  d: path("M8 18c-3.5-1.5-5-5-4.5-8.5c.5-2.5 2-4 4-4c1 0 1.5 1 2 2c1-3.5 3.5-4.5 6-4.25c3.5.25 5 3.75 5 7.75c0 3.5-2 6-4.5 7Zm0 0l-1.5 3.5h11L16 18");
}
</style><g class="hntgybcog"><path class="j-hptyjow"/><path class="agzwz9bjo"/></g>`,
		"fallback": "uix:goalie-catcher",
	});
}

export default Component;
