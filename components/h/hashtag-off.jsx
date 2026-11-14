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
		"content": `<style>.ngp6bh6di {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4v1.1m0 7.8V20m6-16v7.1m0 7.8V20M4 9h1.1m7.8 0H20M4 15h7.1m7.8 0H20M3.5 3.5l17 17");
}
</style><path class="ngp6bh6di"/>`,
		"fallback": "uix:hashtag-off",
	});
}

export default Component;
