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
		"content": `<style>.en07qzb2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7a6 2.5 0 1 0 12 0A6 2.5 0 1 0 6 7Zm6 2.5v10M7 21l5-4l5 4m-9-6.5h8");
}
</style><path class="en07qzb2p"/>`,
		"fallback": "uix-sharp:bar-stool",
	});
}

export default Component;
