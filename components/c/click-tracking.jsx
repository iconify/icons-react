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
		"content": `<style>.h2qmzccue {
  d: path("M14.5 14.5h3.75l3.5 3.5L18 21.75l-3.5-3.5Zm2.25 2.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7plm2b4h {
  d: path("M11.723 13.948L10 19.5L3.5 3L19 10l-5.211 1.737");
}
</style><g class="ulnmmdpxh"><path class="y7plm2b4h"/><path class="h2qmzccue"/></g>`,
		"fallback": "uix-sharp:click-tracking",
	});
}

export default Component;
