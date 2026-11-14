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
		"content": `<style>.wh_zmcc7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10v17H7Zm2.75 17v2m4.5-2v2M9.75 5.75h4.5M9.75 9v7m4.5-7h.01");
}
</style><path class="wh_zmcc7v"/>`,
		"fallback": "uix-sharp:gaming-pc",
	});
}

export default Component;
