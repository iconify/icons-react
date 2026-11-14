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
		"content": `<style>.cud9bvb4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a6 6 0 1 0 12 0A6 6 0 1 0 6 8Zm1.5 9h9L13 19v2.5h-2V19ZM10 6.75h.01m3.74 2.5h.01");
}
</style><path class="cud9bvb4v"/>`,
		"fallback": "uix-sharp:golf-ball-tee",
	});
}

export default Component;
