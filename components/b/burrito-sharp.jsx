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
		"content": `<style>.hrymyab2j {
  d: path("M6 7a6 4 0 0 1 12 0v5.75H6v-1Z");
}

.inzupib2t {
  d: path("M9 7a3 1.25 0 1 0 6 0a3 1.25 0 1 0-6 0Zm9 2.75l-3.885.388l-1.865 2.612M6 15.5l1.5-1l1.5 1l1.5-1l1.5 1l1.5-1l1.5 1l1.5-1l1.5 1v5.75H6v-1Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hrymyab2j"/><path class="inzupib2t"/></g>`,
		"fallback": "iconoven:burrito-sharp",
	});
}

export default Component;
