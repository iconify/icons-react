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
		"content": `<style>.s6arxxb0i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.8 15.5H2.5v-10h13v6.6M9 5.5v-3m-2.75 8h.01m5.49 0h.01M18 13.25l4 8.25h-8Zm0 5.25h.01");
}
</style><path class="s6arxxb0i"/>`,
		"fallback": "uix-sharp:crawl-error",
	});
}

export default Component;
