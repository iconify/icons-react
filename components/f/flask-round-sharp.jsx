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
		"content": `<style>.t7ewwx5rr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.75h3v5.17a6.75 6.75 0 0 1 5.25 6.58H5.25a6.75 6.75 0 0 1 5.25-6.58ZM5.25 14.5h13.5a6.75 6.75 0 0 1-13.5 0ZM9 2.75h6");
}
</style><path class="t7ewwx5rr"/>`,
		"fallback": "iconoven:flask-round-sharp",
	});
}

export default Component;
