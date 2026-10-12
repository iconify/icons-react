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
		"content": `<style>.k558lcclc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8H6l.42.62l1.91 2.76l.42.62l-.42.62l-1.91 2.76L6 16H2.75l.42-.62l1.91-2.76l.42-.62l-.42-.62l-1.91-2.76L2.75 8zm6.25 0h2.5l.42.62l1.91 2.76l.42.62l-.42.62l-1.91 2.76l-.42.62H9l.42-.62l1.91-2.76l.42-.62l-.42-.62l-1.91-2.76L9 8zM16 8h2.5l.42.62l1.91 2.76l.42.62l-.42.62l-1.91 2.76l-.42.62h-3.25l.42-.62l1.91-2.76L18 12l-.42-.62l-1.91-2.76l-.42-.62z");
}
</style><path class="k558lcclc"/>`,
		"fallback": "iconoven:breadcrumbs-sharp",
	});
}

export default Component;
