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
		"content": `<style>.fubfzhbpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.88 3.63l3.49 3.49l.88.88l-.88.88l-3.49 3.49l-.88.88l-.88-.88l-3.49-3.49L6.75 8l.88-.88l3.49-3.49l.88-.88zM6.75 8H4.5v12.75M17.25 8h2.25v12.75M2.75 19l1.75 1.75L6.25 19m11.5 0l1.75 1.75L21.25 19");
}
</style><path class="fubfzhbpo"/>`,
		"fallback": "iconoven:if-branch-sharp",
	});
}

export default Component;
