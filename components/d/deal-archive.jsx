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
		"content": `<style>.su69-c5er {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18V8H3ZM4.5 8v9A1.5 1.5 0 0 0 6 18.5h12a1.5 1.5 0 0 0 1.5-1.5V8m-17 13.5h19m-12-9h5");
}
</style><path class="su69-c5er"/>`,
		"fallback": "uix-sharp:deal-archive",
	});
}

export default Component;
