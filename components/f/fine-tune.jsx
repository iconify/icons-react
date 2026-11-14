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
		"content": `<style>.h7j2hrbig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h5m0 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm7 0h7m-18 6.5v2m8.5-2v2m8.5-2v2");
}
</style><path class="h7j2hrbig"/>`,
		"fallback": "uix-sharp:fine-tune",
	});
}

export default Component;
