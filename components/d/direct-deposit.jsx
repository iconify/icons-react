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
		"content": `<style>.lxzw3tynn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9L12 3.5L20.5 9Zm0 11.5h17M6 11.75v6m12-6v6m-6-6v6M9.25 15L12 17.75L14.75 15");
}
</style><path class="lxzw3tynn"/>`,
		"fallback": "uix-sharp:direct-deposit",
	});
}

export default Component;
