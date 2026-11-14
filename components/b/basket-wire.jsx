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
		"content": `<style>.mu5c-q3zt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10h18l-2 10H5Zm4.5 0V8.5a4.5 4.5 0 0 1 9 0V10m-8 3v4m3.5-4v4m3.5-4v4");
}
</style><path class="mu5c-q3zt"/>`,
		"fallback": "uix-sharp:basket-wire",
	});
}

export default Component;
