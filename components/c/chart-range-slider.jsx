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
		"content": `<style>.sdsotyb8j {
  d: path("M4.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm10 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM2.5 12h1.75m15.5 0h1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.weeoombgx {
  fill: currentColor;
  d: path("M9.75 10.75h4.5v2.5h-4.5Z");
}
</style><g class="ulnmmdpxh"><path class="sdsotyb8j"/><path class="weeoombgx"/></g>`,
		"fallback": "uix-sharp:chart-range-slider",
	});
}

export default Component;
