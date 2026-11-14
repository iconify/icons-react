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
		"content": `<style>.m7h0vybld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13.5c-5.5-3-7.5-6-6.5-8.5c1-2.25 5-2.5 6.5.25c1.5-2.75 5.5-2.5 6.5-.25c1 2.5-1 5.5-6.5 8.5Zm0 0v8m0-2c-2.5 0-5-1.5-5.5-4c2.5 0 5 1.5 5.5 4Zm0 0c2.5 0 5-1.5 5.5-4c-2.5 0-5 1.5-5.5 4Z");
}
</style><path class="m7h0vybld"/>`,
		"fallback": "uix-sharp:flower-heart",
	});
}

export default Component;
