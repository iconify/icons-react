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
		"content": `<style>.im-1machu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 6V3.5a1.5 1.5 0 0 1 3 0V6m-5 0h7v3h-7Zm-1 3h9v12h-9Zm2.5 4h2.5M10 16.5h2.5");
}
</style><path class="im-1machu"/>`,
		"fallback": "uix-sharp:baby-bottle",
	});
}

export default Component;
