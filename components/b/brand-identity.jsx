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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vg4j96y4v {
  d: path("M6.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.25 7c0-1.5 1.5-2.25 3.25-2.25s3.25.75 3.25 2.25M14.5 10h4m-4 4h3");
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="vg4j96y4v"/></g>`,
		"fallback": "uix-sharp:brand-identity",
	});
}

export default Component;
