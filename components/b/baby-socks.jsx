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
		"content": `<style>.j4vrq_b1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v13.5a4 4 0 0 1-4 4H4.5a2.5 2.5 0 0 1 0-5H6V3Zm4 0v13.5a4 4 0 0 0 4 4h1.5a2.5 2.5 0 0 0 0-5H18V3ZM6 6.5h4m4 0h4");
}
</style><path class="j4vrq_b1w"/>`,
		"fallback": "uix-sharp:baby-socks",
	});
}

export default Component;
