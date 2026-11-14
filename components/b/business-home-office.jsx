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
		"content": `<style>.bsq5xgbnw {
  d: path("M3.5 21V10L12 2.5l8.5 7.5v11");
}

.gvi7lev8b {
  d: path("M8 9.5h8V15H8Zm4 5.5v3m-5.75 0h11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bsq5xgbnw"/><path class="gvi7lev8b"/></g>`,
		"fallback": "uix-sharp:business-home-office",
	});
}

export default Component;
