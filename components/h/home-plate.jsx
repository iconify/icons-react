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
		"content": `<style>.aqa61rbhw {
  d: path("M7.5 7h9v4.5L12 16l-4.5-4.5Z");
}

.kio2ddbfn {
  d: path("M4 3.5h16v9l-8 8l-8-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kio2ddbfn"/><path class="aqa61rbhw"/></g>`,
		"fallback": "uix-sharp:home-plate",
	});
}

export default Component;
