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
		"content": `<style>.k46yhactw {
  d: path("m9.25 13l2 2l-2 2");
}

.sarw8qchv {
  d: path("M3.5 21.5V10a5.5 5.5 0 0 1 11 0v11.5m0-13l6-3v14l-6 2ZM6.25 15h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sarw8qchv"/><path class="k46yhactw"/></g>`,
		"fallback": "uix-sharp:air-door",
	});
}

export default Component;
