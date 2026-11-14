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
		"content": `<style>.irnemp7gx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5H8l9.5-5v15l-9.5-5H3.5Zm3 5l1.5 5M20.5 10v4");
}
</style><path class="irnemp7gx"/>`,
		"fallback": "uix-sharp:announcement",
	});
}

export default Component;
