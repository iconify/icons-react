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
		"content": `<style>.upsr1ibth {
  d: path("M9.25 2.75h5.5v3h-5.5zm1.25 7.75a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-3.75 6.75a2.25 2.25 0 0 1 4.5 0Zm7-6.25h2.75m-2.75 3h2.75");
}

.w7g04eb1z {
  d: path("M14.75 4.25h4.5v17H4.75v-17h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="w7g04eb1z"/><path class="upsr1ibth"/></g>`,
		"fallback": "iconoven:census-sharp",
	});
}

export default Component;
