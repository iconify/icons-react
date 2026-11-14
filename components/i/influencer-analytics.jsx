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
		"content": `<style>.b81zr4b9i {
  d: path("m9 16.5l2-3.5l2 1.75L15 10");
}

.ptbj7db6p {
  d: path("M6 2.5h12v19H6Zm4.5 3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ptbj7db6p"/><path class="b81zr4b9i"/></g>`,
		"fallback": "uix-sharp:influencer-analytics",
	});
}

export default Component;
