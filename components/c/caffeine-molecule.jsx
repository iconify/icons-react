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
		"content": `<style>.n-1i9if4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.75 9.25L8 6.5L3.25 9.25v5.5L8 17.5l4.75-2.75Zm0 0L18 7.5l3.25 4.5L18 16.5l-5.25-1.75M8 6.5h.01m-4.76 8.25h.01M21.25 12h.01");
}
</style><path class="n-1i9if4z"/>`,
		"fallback": "uix-sharp:caffeine-molecule",
	});
}

export default Component;
