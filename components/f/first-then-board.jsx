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
		"content": `<style>.i6h_yxbmi {
  d: path("M4.75 15.75L6.5 17.5l2.25-3.75m8.75-.5l.75 1.75H20l-1.5 1l.5 1.75l-1.5-1l-1.5 1l.5-1.75l-1.5-1h1.75Z");
}

.n4bevabta {
  d: path("M2.5 10h8v11h-8Zm11 0h8v11h-8ZM5 5h13.5m-2-2l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n4bevabta"/><path class="i6h_yxbmi"/></g>`,
		"fallback": "uix-sharp:first-then-board",
	});
}

export default Component;
