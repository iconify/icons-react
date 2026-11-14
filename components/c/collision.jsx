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
		"content": `<style>.z1tbiqb8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm9 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm0-10.5v4M7.75 6l1.5 2.25m7-2.25l-1.5 2.25");
}
</style><path class="z1tbiqb8z"/>`,
		"fallback": "uix-sharp:collision",
	});
}

export default Component;
