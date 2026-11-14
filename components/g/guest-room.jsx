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
		"content": `<style>.uz6x-lben {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5v15M3 17h8.2M3 12.5h10.9m-8.4-3h5v3h-5ZM14 16h8v5.5h-8Zm2.75 0v-1.25h2.5V16");
}
</style><path class="uz6x-lben"/>`,
		"fallback": "uix-sharp:guest-room",
	});
}

export default Component;
