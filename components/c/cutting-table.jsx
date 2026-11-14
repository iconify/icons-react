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
		"content": `<style>.fe-ctsbvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm3.75-5.5L20 11M6.25 10L20 4.5m-17.5 17l3-6h16l-3 6Z");
}
</style><path class="fe-ctsbvw"/>`,
		"fallback": "uix-sharp:cutting-table",
	});
}

export default Component;
