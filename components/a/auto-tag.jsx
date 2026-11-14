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
		"content": `<style>.fuk-54b1c {
  d: path("M13 10c.1 2 .9 2.9 3 3c-2.1.1-2.9 1-3 3c-.1-2-.9-2.9-3-3c2.1-.1 2.9-1 3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x564sptlv {
  d: path("M3.5 3.5H12l8.5 8.5l-8.5 8.5L3.5 12ZM8 8h.01");
}
</style><g class="ulnmmdpxh"><path class="x564sptlv"/><path class="fuk-54b1c"/></g>`,
		"fallback": "uix-sharp:auto-tag",
	});
}

export default Component;
