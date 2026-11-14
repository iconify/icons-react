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
		"content": `<style>.c7w7rhc6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.3 16.5H2.5v-13h16v7.8m-12-7.8v13m4-13v13m4-13v8.4M5 16.5V19m6-2.5V19m3-1.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 0l1.75-1.75");
}
</style><path class="c7w7rhc6y"/>`,
		"fallback": "uix-sharp:heat-cost-allocator",
	});
}

export default Component;
