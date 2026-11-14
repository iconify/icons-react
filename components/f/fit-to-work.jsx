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
		"content": `<style>.l3zghubfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.6 19H2.5V7h17v6.6M8 7V5c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5v2M2.5 12h17m-5 6l2.5 2.5l4.5-5");
}
</style><path class="l3zghubfn"/>`,
		"fallback": "uix-sharp:fit-to-work",
	});
}

export default Component;
