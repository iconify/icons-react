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
		"content": `<style>.a76ch42xy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5v-14a4 4 0 0 1 8 0v14Zm11 0v-14a4 4 0 0 1 8 0v14Zm-8.25-11h2.5M5.25 14h2.5m-2.5 3.5h2.5m8.5-7h2.5m-2.5 3.5h2.5m-2.5 3.5h2.5");
}
</style><path class="a76ch42xy"/>`,
		"fallback": "uix-sharp:code-of-conduct",
	});
}

export default Component;
