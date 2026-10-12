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
		"content": `<style>.qic70er6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.75q.38-2.91-2.5-3.5q-.38 2.91 2.5 3.5Zm0 0q2.88-.59 2.5-3.5q-2.88.59-2.5 3.5Zm9 0q.38-2.91-2.5-3.5q-.38 2.91 2.5 3.5Zm0 0q2.88-.59 2.5-3.5q-2.88.59-2.5 3.5Zm-9 0v3m9-3v3m-13.75 0h18.5v4.5H2.75zm4.75 4.5v4m0-2l-1.5 2m6-4v6m0-3.5l1.5 2m3-4.5v4m0-2l1.5 2");
}
</style><path class="qic70er6l"/>`,
		"fallback": "iconoven:hydroponics-sharp",
	});
}

export default Component;
