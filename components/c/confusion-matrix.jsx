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
		"content": `<style>.gdujidb5b {
  fill: currentColor;
  d: path("M4 4h6.5v6.5H4Z");
}

.ni889rb3s {
  d: path("M13.5 4H20v6.5h-6.5ZM4 13.5h6.5V20H4Z");
}

.u_66pfgnh {
  fill: currentColor;
  d: path("M13.5 13.5H20V20h-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gdujidb5b"/><path class="ni889rb3s"/><path class="u_66pfgnh"/></g>`,
		"fallback": "uix-sharp:confusion-matrix",
	});
}

export default Component;
