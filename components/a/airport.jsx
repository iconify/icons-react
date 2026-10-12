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
		"content": `<style>.jrfqtef5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 4.75h10.5q1 0 .66.94l-1.32 3.62q-.34.94-1.34.94h-6.5q-1 0-1.34-.94L6.09 5.69q-.34-.94.66-.94m2 2.75h6.5m-5.5 2.75h4.5L15 20.5H9Zm-6 10.25h16.5M12 4.75v-2");
}
</style><path class="jrfqtef5b"/>`,
		"fallback": "iconoven:airport",
	});
}

export default Component;
