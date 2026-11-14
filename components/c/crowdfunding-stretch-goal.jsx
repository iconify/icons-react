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
		"content": `<style>.bfui0e4kv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5H14V17H2.5Zm14.5-8v17m0-17h4l-1.5 2.75L21 9h-4M5.25 14.25h6");
}
</style><path class="bfui0e4kv"/>`,
		"fallback": "uix-sharp:crowdfunding-stretch-goal",
	});
}

export default Component;
