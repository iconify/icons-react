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
		"content": `<style>.d0cm20b3y {
  d: path("M4 5.5a8 3 0 1 0 16 0a8 3 0 1 0-16 0Z");
}

.i-7a-zb9i {
  d: path("M4 5.5v13a8 3 0 0 0 16 0v-13");
}

.os46fqbjr {
  d: path("M4 12a8 3 0 0 0 16 0m-8-3.5v13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d0cm20b3y"/><path class="i-7a-zb9i"/><path class="os46fqbjr"/></g>`,
		"fallback": "uix-sharp:database-partition",
	});
}

export default Component;
