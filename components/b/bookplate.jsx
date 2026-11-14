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
		"content": `<style>.pwik2zbwn {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h5m-2-11h5A1.5 1.5 0 0 0 16.5 7v4a1.5 1.5 0 0 0-1.5 1.5h-5A1.5 1.5 0 0 0 8.5 11V7A1.5 1.5 0 0 0 10 5.5ZM11 9h3");
}

.u0twtl96g {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u0twtl96g"/><path class="pwik2zbwn"/></g>`,
		"fallback": "uix-sharp:bookplate",
	});
}

export default Component;
