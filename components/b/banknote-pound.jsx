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
		"content": `<style>.et6_r_p4v {
  d: path("M14.75 9c-.35-1.05-1.1-1.5-2-1.5c-1.2 0-2.1.9-2 2.25v4c-.1 1.25-.7 2.15-1.75 2.75h6M9 12h4.25");
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
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="et6_r_p4v"/></g>`,
		"fallback": "uix-sharp:banknote-pound",
	});
}

export default Component;
