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

.vfc5tghhi {
  d: path("M4 7q8-6 16-1M9.75 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.vgwlob7mz {
  d: path("M3 15q9-10 18 0q-9 10-18 0Z");
}
</style><g class="ulnmmdpxh"><path class="vgwlob7mz"/><path class="vfc5tghhi"/></g>`,
		"fallback": "uix-sharp:eyebrow",
	});
}

export default Component;
