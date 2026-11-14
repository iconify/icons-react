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
		"content": `<style>.h2slz6jzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 7a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm7.5-10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm7.5-5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6.75 7h3m-3 10h3m-4-8.25l5 6.5m-5 0l5-6.5m3-.5l4 2.5m-4 5l4-2.5");
}
</style><path class="h2slz6jzp"/>`,
		"fallback": "uix-sharp:deep-learning",
	});
}

export default Component;
