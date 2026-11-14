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
		"content": `<style>.ur4e8fb_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h17.5m-5-4.5l5 4.5m-1 5.5L16 18h4l-3.5 3.5");
}
</style><path class="ur4e8fb_p"/>`,
		"fallback": "uix-sharp:catalyst",
	});
}

export default Component;
