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
		"content": `<style>.k-jd70b2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 15.75L9.5 20.5h5L13 15.75a4 4 0 1 0 1.75-5.5a4 4 0 1 0-5.5 0a4 4 0 1 0 1.75 5.5Z");
}
</style><path class="k-jd70b2t"/>`,
		"fallback": "uix-sharp:club-suit",
	});
}

export default Component;
