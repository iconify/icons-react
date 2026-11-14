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
		"content": `<style>.eu0moj9sl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4H3v16h2M19 4h2v16h-2M7 12l2-4l2 8l2-10l2 12l2-6");
}
</style><path class="eu0moj9sl"/>`,
		"fallback": "uix-sharp:audio-clip",
	});
}

export default Component;
