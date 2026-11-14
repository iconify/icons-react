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
		"content": `<style>.s1gyd4llm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 15c-3-5-10.5-5-13.5 0L3 11v8l4.5-4c3 5 10.5 5 13.5 0Zm-6.5-8a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM19 3h.01M17.5 14.5h.01");
}
</style><path class="s1gyd4llm"/>`,
		"fallback": "uix-sharp:fish-bubbles",
	});
}

export default Component;
