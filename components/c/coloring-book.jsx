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
		"content": `<style>.d09xh5buj {
  d: path("M16.75 8a2 2 0 1 1 0 4a2 2 0 1 1 0-4m-3 7c.85-.85 1.65-.85 2.5 0s1.65.85 2.5 0M5 10.25h4M5 13.5h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wn3w5rbpl {
  d: path("M12 6.5c-2-1.5-5-2-9.25-1.75v13.5C7 18 10 18.5 12 20c2-1.5 5-2 9.25-1.75V4.75C17 4.5 14 5 12 6.5m0 0v13");
}
</style><g class="hntgybcog"><path class="wn3w5rbpl"/><path class="d09xh5buj"/></g>`,
		"fallback": "iconoven:coloring-book",
	});
}

export default Component;
