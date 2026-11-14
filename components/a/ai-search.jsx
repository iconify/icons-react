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
		"content": `<style>.rt6_gdbgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0ZM12 17l3.5 3.5m2.25-16.75l.75 1.75l1.75.75L18.5 7l-.75 1.75L17 7l-1.75-.75L17 5.5Z");
}
</style><path class="rt6_gdbgm"/>`,
		"fallback": "uix-sharp:ai-search",
	});
}

export default Component;
