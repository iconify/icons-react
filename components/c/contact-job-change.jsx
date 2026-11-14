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
		"content": `<style>.gcpb_sbxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 7.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM3 21c0-4 3.25-6.5 7.5-6.5h1m3.5 1.75h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><path class="gcpb_sbxq"/>`,
		"fallback": "uix-sharp:contact-job-change",
	});
}

export default Component;
