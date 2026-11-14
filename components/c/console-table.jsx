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
		"content": `<style>.a-6tiib5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18V7H3ZM5.5 7v13.5M18.5 7v13.5m-13-6h13");
}
</style><path class="a-6tiib5z"/>`,
		"fallback": "uix-sharp:console-table",
	});
}

export default Component;
