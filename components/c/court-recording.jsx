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
		"content": `<style>.fbfjil0zf {
  d: path("M3.5 10a6 6 0 0 0 12 0m-6 6v4.5m-3 0h6m3-2a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.witkf1bpe {
  d: path("M7.5 2.5h4A1.5 1.5 0 0 1 13 4v7a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 6 11V4a1.5 1.5 0 0 1 1.5-1.5Z");
}
</style><g class="ulnmmdpxh"><path class="witkf1bpe"/><path class="fbfjil0zf"/></g>`,
		"fallback": "uix-sharp:court-recording",
	});
}

export default Component;
