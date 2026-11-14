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
		"content": `<style>.wdp7738ch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 10.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm-1.75 11c0-3 2.25-5.25 5.25-5.25S13 18.5 13 21.5Zm14.5-7s-4.5-4-4.5-7.5a4.5 4.5 0 0 1 9 0c0 3.5-4.5 7.5-4.5 7.5ZM17 7h.01");
}
</style><path class="wdp7738ch"/>`,
		"fallback": "uix-sharp:account-addresses",
	});
}

export default Component;
