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
		"content": `<style>.w0qedubgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v11H2.75zm0 5.5h18.5M9 8.25v5.5m6-5.5v5.5m-3 2.75v4.75m-2.375-2.375h4.75");
}
</style><path class="w0qedubgz"/>`,
		"fallback": "iconoven:insert-row-sharp",
	});
}

export default Component;
