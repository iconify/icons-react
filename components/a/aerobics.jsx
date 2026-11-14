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
		"content": `<style>.xyl8mfq-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6 21.5L8.5 14V9.5m-4.5 3l4.5-3l5-3.5m-5 8l4.5 1l.5 3.5m-3 0H20v3h-9.5Z");
}
</style><path class="xyl8mfq-f"/>`,
		"fallback": "uix-sharp:aerobics",
	});
}

export default Component;
