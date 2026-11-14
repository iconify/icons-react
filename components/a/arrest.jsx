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
		"content": `<style>.obl84cb6h {
  d: path("M2.75 14.75a4 4 0 1 1 2.5 2.5m16-2.5a4 4 0 1 0-2.5 2.5");
}

.otugt1b0u {
  d: path("M4.75 6.5h3.5v3h-3.5Zm11 0h3.5v3h-3.5ZM8.25 8h7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="obl84cb6h"/><path class="otugt1b0u"/></g>`,
		"fallback": "uix-sharp:arrest",
	});
}

export default Component;
