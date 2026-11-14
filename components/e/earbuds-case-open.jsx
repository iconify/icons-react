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
		"content": `<style>.d1jnytbij {
  d: path("M4 13h16v2.5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 15.5Zm-.695-7.439l15.757-2.779l.695 3.94L4 9.5Z");
}

.r16ytabqy {
  d: path("M7.25 13a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d1jnytbij"/><path class="r16ytabqy"/></g>`,
		"fallback": "uix-sharp:earbuds-case-open",
	});
}

export default Component;
