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
		"content": `<style>.dmex28lms {
  d: path("M8 9h8l-1.5-2h-5Zm.5 0c-2 2.5-2 6.5 0 9h7c2-2.5 2-6.5 0-9m-9 9h11v3.5h-11Zm3.25-9v9m4.5-9v9");
}

.nuygbdb3o {
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nuygbdb3o"/><path class="dmex28lms"/></g>`,
		"fallback": "uix-sharp:hurricane-lantern",
	});
}

export default Component;
