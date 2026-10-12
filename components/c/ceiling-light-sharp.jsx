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
		"content": `<style>.j0zqtdb5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.5H9m6 0h6.25M9 4.5h6v2.75H9zM4.25 7.25h15.5V12H4.25zM6.5 12h11a5.5 5 0 0 1-11 0Z");
}
</style><path class="j0zqtdb5w"/>`,
		"fallback": "iconoven:ceiling-light-sharp",
	});
}

export default Component;
