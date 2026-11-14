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
		"content": `<style>.atlyoflpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 8.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM6.5 21c0-3.5 2.5-5.5 5.5-5.5s5.5 2 5.5 5.5M2.5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-15 11v-1.5c0-2.75 1.5-4.5 4-4.5m15 6v-1.5c0-2.75-1.5-4.5-4-4.5");
}
</style><path class="atlyoflpf"/>`,
		"fallback": "uix-sharp:beta-testers",
	});
}

export default Component;
