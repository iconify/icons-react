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
		"content": `<style>.px09iqbzw {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M9 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm5.25 2.25l2 2");
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
</style><g class="ulnmmdpxh"><path class="u0twtl96g"/><path class="px09iqbzw"/></g>`,
		"fallback": "uix-sharp:genre-mystery",
	});
}

export default Component;
