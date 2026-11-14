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
		"content": `<style>.i4ou-0b3o {
  d: path("M2.5 16.5V11l3-2.5H14l3.5 3H20q1.5 0 1.5 1.5v3.5Z");
}

.n_2e-obiu {
  d: path("M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-9.25-10l4-5.5l4 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i4ou-0b3o"/><path class="n_2e-obiu"/></g>`,
		"fallback": "uix-sharp:car-camping",
	});
}

export default Component;
