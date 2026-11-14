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
		"content": `<style>.jv-kl7buw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21V10.5L14.5 3l2.25 2L10 11.75V21Zm0-6.5h3m-3 2.75h3");
}
</style><path class="jv-kl7buw"/>`,
		"fallback": "uix-sharp:bendy-straw",
	});
}

export default Component;
