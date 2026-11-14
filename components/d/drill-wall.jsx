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
		"content": `<style>.qszn8vlzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h11v5.5H3Zm2.5 5.5l-1 8h4l.75-8M14 8.75h4M18 3h3.5v18H18Z");
}
</style><path class="qszn8vlzk"/>`,
		"fallback": "uix-sharp:drill-wall",
	});
}

export default Component;
