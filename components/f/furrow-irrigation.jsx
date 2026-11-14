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
		"content": `<style>.v-l09eh7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5q9 5 18 0m-18 7q9 5 18 0m-18 7q9 5 18 0M8 3.5q1.25-.75 2.5 0t2.5 0t2.5 0m-7.5 7q1.25-.75 2.5 0t2.5 0t2.5 0m-7.5 7q1.25-.75 2.5 0t2.5 0t2.5 0");
}
</style><path class="v-l09eh7p"/>`,
		"fallback": "uix-sharp:furrow-irrigation",
	});
}

export default Component;
