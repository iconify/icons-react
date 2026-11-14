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
		"content": `<style>.drg8g9bbi {
  d: path("M12 18.75L9.25 16A2 2 0 0 1 12 13.5a2 2 0 0 1 2.75 2.5Z");
}

.g9m23rm5u {
  d: path("M4 10h16v11.5H4Zm3.5 0V7a4.5 4.5 0 0 1 9 0v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g9m23rm5u"/><path class="drg8g9bbi"/></g>`,
		"fallback": "uix-sharp:heart-lock",
	});
}

export default Component;
