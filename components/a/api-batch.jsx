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
		"content": `<style>.o00l46bwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h12V7h-12Zm0 7.25h12v4.5h-12Zm0 7.25h12v4.5h-12Zm-3-14.5c-2 0-2 1-2 3V10c0 1.5-1 2-2 2c1 0 2 .5 2 2v4.5c0 2 0 3 2 3");
}
</style><path class="o00l46bwg"/>`,
		"fallback": "uix-sharp:api-batch",
	});
}

export default Component;
