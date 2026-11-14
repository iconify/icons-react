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
		"content": `<style>.jazqedwnx {
  d: path("M3 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.o6ephob7s {
  d: path("M6 14a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm11.5-2h4m-2.25-2.25L21.5 12l-2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jazqedwnx"/><path class="o6ephob7s"/></g>`,
		"fallback": "uix-sharp:alpha-particle",
	});
}

export default Component;
