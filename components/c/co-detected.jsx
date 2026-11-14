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
		"content": `<style>.s-kciibao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l8.25 4.75v9.5L12 21.5l-8.25-4.75v-9.5Zm0 5V13m0 3.5h.01");
}
</style><path class="s-kciibao"/>`,
		"fallback": "uix-sharp:co-detected",
	});
}

export default Component;
