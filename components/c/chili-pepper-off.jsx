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
		"content": `<style>.c3728mu-e {
  d: path("M15.75 7.25c-.25-1.75.5-3.5 2.5-4.5m-2 8c-.5 2-1.75 3.75-3.25 5.25");
}

.eeaun0i-b {
  d: path("M18 7.5c1.5 1.5 1.25 4.5-.5 7c-2.5 3.5-7 6.25-12.75 6.5c-.6 0-.75-.75-.25-1.05c5.25-2.7 8-6.95 9-11.45c.4-1.75 3-2.5 4.5-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eeaun0i-b"/><path class="c3728mu-e"/></g>`,
		"fallback": "iconoven:chili-pepper-off",
	});
}

export default Component;
