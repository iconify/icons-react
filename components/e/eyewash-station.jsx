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
		"content": `<style>.llgiy1mtr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10h16c0 5-3 7.5-8 7.5S3 15 3 10Zm8 7.5v4M8 10q0-5 1.5-7m4.5 7q0-5-1.5-7m6.5 7h2.5v5.5");
}
</style><path class="llgiy1mtr"/>`,
		"fallback": "uix-sharp:eyewash-station",
	});
}

export default Component;
