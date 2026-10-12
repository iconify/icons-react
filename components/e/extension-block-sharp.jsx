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
		"content": `<style>.chh6h1bok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h8v8h-8zm0 10.5h8v8h-8zm10.5 0h8v8h-8zm4.88-9.87l2.49 2.49l.88.88l-.88.88l-2.49 2.49l-.88.88l-.88-.88l-2.49-2.49l-.88-.88l.88-.88l2.49-2.49l.88-.88z");
}
</style><path class="chh6h1bok"/>`,
		"fallback": "iconoven:extension-block-sharp",
	});
}

export default Component;
