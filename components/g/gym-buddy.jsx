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
		"content": `<style>.jtq-babeh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 20v-1c0-3.25 2.25-5.5 5-5.5c1.5 0 2.5.25 3.25.75M13.5 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2.5 11c0-3 2.25-5 5.5-5s5 2 5 5");
}
</style><path class="jtq-babeh"/>`,
		"fallback": "uix-sharp:gym-buddy",
	});
}

export default Component;
