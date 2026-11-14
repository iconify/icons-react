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
		"content": `<style>.opb5z7b6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9.5h9V18h-9Zm-2 8.5h13v3.5h-13ZM9 6.75C8 5.5 10 4 9 2.5m3 4.25C11 5.5 13 4 12 2.5m3 4.25C14 5.5 16 4 15 2.5");
}
</style><path class="opb5z7b6z"/>`,
		"fallback": "uix-sharp:humidifier",
	});
}

export default Component;
