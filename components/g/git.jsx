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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2ulw16gj {
  d: path("M4.25 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 14a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm11 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6.5 7.25v9.5");
}

.y5l6a2bra {
  d: path("M6.5 7.25c0 5.75 11 3.75 11 9.5");
}
</style><g class="ulnmmdpxh"><path class="x2ulw16gj"/><path class="y5l6a2bra"/></g>`,
		"fallback": "uix-sharp:git",
	});
}

export default Component;
