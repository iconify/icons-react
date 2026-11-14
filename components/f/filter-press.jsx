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
		"content": `<style>.i15_5jf4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4H6v15H2.5ZM18 4h3.5v15H18ZM6 5.5h12M9 8.25V17m3-8.75V17m3-8.75V17");
}
</style><path class="i15_5jf4z"/>`,
		"fallback": "uix-sharp:filter-press",
	});
}

export default Component;
