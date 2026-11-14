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
		"content": `<style>.h1frv6bze {
  d: path("M6.5 8.5C5.5 5 7 3 9.5 3.25c1.25.15 1.75.75 2.5.75s1.25-.6 2.5-.75C17 3 18.5 5 17.5 8.5Zm-3.75 4q9.25-2.5 18.5 0");
}

.r1xdwef_q {
  d: path("M9 11.25h6l-1.5 9.25h-3ZM8 14.5h8m-7 3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h1frv6bze"/><path class="r1xdwef_q"/></g>`,
		"fallback": "uix-sharp:dental-implant",
	});
}

export default Component;
