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
		"content": `<style>.fh8zdfbhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.288 4.182l4.887-.362m4.964 3.895l1.213 8.009m-3.569 3.573l-6.51-1.085m-4.6-4.967l-.345-4.487M2.5 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm13.5-1a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM18.5 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-15-2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="fh8zdfbhv"/>`,
		"fallback": "uix-sharp:distort-free",
	});
}

export default Component;
