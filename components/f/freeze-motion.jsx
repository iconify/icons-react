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
		"content": `<style>.gkg0fccwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10c2.5 3 4 5 4 7.5a4 4 0 0 1-8 0C8 15 9.5 13 12 10Zm0-7.5v3M6 4l1.5 2.5M18 4l-1.5 2.5");
}
</style><path class="gkg0fccwr"/>`,
		"fallback": "uix-sharp:freeze-motion",
	});
}

export default Component;
