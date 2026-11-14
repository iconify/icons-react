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
		"content": `<style>.j-8klnbbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.5V19C4.75 17.75 4 16.25 4 14.25C4 11.5 6.25 9.5 9 9.5c2.5 0 4.5 1.75 4.5 4.5l1 2.25c.25.25 0 .5-.5.5h-.5v1.5c0 .75-.5 1.25-1.25 1.25H11v2m5.25-12.75a3 3 0 1 1 2.5 0v1.75h-2.5Z");
}
</style><path class="j-8klnbbf"/>`,
		"fallback": "uix:consultant",
	});
}

export default Component;
