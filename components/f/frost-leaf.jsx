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
		"content": `<style>.fiqs621gi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.81 18.809C9.446 19.914 6.654 20.5 3.5 20.5c0-10.5 6.5-17 17-17c0 3.325-.652 6.248-1.876 8.692M3.5 20.5L13 11m5 4v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="fiqs621gi"/>`,
		"fallback": "uix-sharp:frost-leaf",
	});
}

export default Component;
