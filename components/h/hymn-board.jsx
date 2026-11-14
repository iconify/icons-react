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
		"content": `<style>.i6tvv97qi {
  d: path("M6.25 5.25h4.5v3h-4.5Zm7 0h4.5v3h-4.5Zm-7 5.25h4.5v3h-4.5Zm7.75 0h3.75v3H14Z");
}

.st75w2zkc {
  d: path("M3.5 2.5h17v13.75h-17ZM12 16.25v5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="st75w2zkc"/><path class="i6tvv97qi"/></g>`,
		"fallback": "uix-sharp:hymn-board",
	});
}

export default Component;
