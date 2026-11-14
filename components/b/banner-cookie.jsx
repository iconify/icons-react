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
		"content": `<style>.d07wpmysd {
  d: path("M12.5 11.25a3.75 3.75 0 1 1-3-3a2.25 2.25 0 0 0 3 3Zm-5 1h.01m2.24 2h.01M15.5 10h3.25m-3.25 4H18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="d07wpmysd"/></g>`,
		"fallback": "uix-sharp:banner-cookie",
	});
}

export default Component;
