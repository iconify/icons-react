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
		"content": `<style>.m5a5acbpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 3.75h16v13.5h-9L8.5 20.5l-1.23 1.101l-.02-1.651v-2.7h-4.5V3.75zm5.5 3.75L9 13.5m6.25-6l-1.75 6");
}
</style><path class="m5a5acbpq"/>`,
		"fallback": "iconoven:code-comment-sharp",
	});
}

export default Component;
