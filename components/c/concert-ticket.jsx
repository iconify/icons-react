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
		"content": `<style>.l4c1akb5s {
  d: path("M2.5 5.5H15v13H2.5Zm15.25 0h3.75v13h-3.75Z");
}

.ui0b3cc8q {
  d: path("M6.25 14.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0v-6q3 .75 2.75 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l4c1akb5s"/><path class="ui0b3cc8q"/></g>`,
		"fallback": "uix-sharp:concert-ticket",
	});
}

export default Component;
