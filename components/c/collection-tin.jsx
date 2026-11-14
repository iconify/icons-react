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
		"content": `<style>.swaxw9npe {
  d: path("M6 11.5v8a6 2.25 0 0 0 12 0v-8m-7.5 0h3M10 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuiwirbkj {
  d: path("M6 11.5a6 2.75 0 1 0 12 0a6 2.75 0 1 0-12 0Z");
}
</style><g class="ulnmmdpxh"><path class="yuiwirbkj"/><path class="swaxw9npe"/></g>`,
		"fallback": "uix-sharp:collection-tin",
	});
}

export default Component;
