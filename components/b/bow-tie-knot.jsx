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
		"content": `<style>.cdrcy6bwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3h4l-1 4h-2Zm1 4L9 18l3 3.5l3-3.5l-2-11");
}
</style><path class="cdrcy6bwq"/>`,
		"fallback": "uix-sharp:bow-tie-knot",
	});
}

export default Component;
