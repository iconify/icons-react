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
		"content": `<style>.xoqbjz4hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h9v3m0 2l1.5 2.029v.621a1.5 1.5 0 0 1-3 0v-.621zm-9 6.5h12.5l3.4-2.2a1.6 1.6 0 0 1 2 2.45l-4.3 4.65l-1.086 1.126l-1.564-.026H2.75V17.5Z");
}
</style><path class="xoqbjz4hr"/>`,
		"fallback": "iconoven:hand-wash-sharp",
	});
}

export default Component;
