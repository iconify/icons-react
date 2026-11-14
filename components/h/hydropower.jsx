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
		"content": `<style>.nozc4vbqo {
  d: path("M11 9q-2.5-2.5 0-6m0 6q3.5-.25 5.25 3M11 9q-1 3.25-5.25 3m-3 7q1.75-1.5 3.5 0t3.5 0q1.417-1.215 2.835-.462M19.5 14.5l-3.25 4h3.5l-2.5 3.25");
}

.s69339ifo {
  d: path("M5 9a6 6 0 1 0 12 0A6 6 0 1 0 5 9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s69339ifo"/><path class="nozc4vbqo"/></g>`,
		"fallback": "uix-sharp:hydropower",
	});
}

export default Component;
