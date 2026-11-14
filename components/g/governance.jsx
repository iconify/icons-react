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
		"content": `<style>.uqsjxmnao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8.5l9-5l9 5ZM6 11v7m4-7v7m4-7v7m4-7v7M3.5 20.5h17");
}
</style><path class="uqsjxmnao"/>`,
		"fallback": "uix-sharp:governance",
	});
}

export default Component;
