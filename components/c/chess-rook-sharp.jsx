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
		"content": `<style>.yi-58ro9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h1.75v2h1.65V3h2.2v2h1.65V3H17v5l-.35.35l-.8.8l-.35.35v6h-7v-6l-.35-.35l-.8-.8L7 8V3zm1.25 6.5h6.5M5 18.5h14v2.75H5z");
}
</style><path class="yi-58ro9q"/>`,
		"fallback": "iconoven:chess-rook-sharp",
	});
}

export default Component;
