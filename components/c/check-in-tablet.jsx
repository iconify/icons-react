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
		"content": `<style>.p6pi3ioed {
  d: path("M6 2.5h12v15H6Zm3 19h6m-3-4v4");
}

.r43agud4t {
  d: path("m9 10.25l2.25 2.25L15 8.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p6pi3ioed"/><path class="r43agud4t"/></g>`,
		"fallback": "uix-sharp:check-in-tablet",
	});
}

export default Component;
