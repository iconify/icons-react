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
		"content": `<style>.c5-kcs7-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5L12 6l3.5-3.5m-7 19L12 18l3.5 3.5M7 9h10M7 12h10M7 15h10");
}
</style><path class="c5-kcs7-z"/>`,
		"fallback": "uix:comment-collapse",
	});
}

export default Component;
