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
		"content": `<style>.daem5dbgi {
  d: path("M15 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.u0jh89ayv {
  d: path("M7 6.5v11m0-2c0-3 10-1 10-4.5M5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u0jh89ayv"/><path class="daem5dbgi"/></g>`,
		"fallback": "uix-sharp:feature-branch",
	});
}

export default Component;
