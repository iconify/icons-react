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
		"content": `<style>.jgd0d3b8q {
  d: path("M10.5 9.5C12 7 15 6.75 16.25 9.5L18 7.75v3.5L16.25 9.5C15 12.25 12 12 10.5 9.5Z");
}

.tzdelktsm {
  d: path("M7 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm2 5l-6 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tzdelktsm"/><path class="jgd0d3b8q"/></g>`,
		"fallback": "uix-sharp:fish-net",
	});
}

export default Component;
