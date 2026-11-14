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
		"content": `<style>.o2z1ru1ci {
  d: path("M9 3v12h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2f53cb5z {
  d: path("M3 3h6l12 12v4.5q-1.5 2-3 0t-3 0t-3 0t-3 0t-3 0t-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="y2f53cb5z"/><path class="o2z1ru1ci"/></g>`,
		"fallback": "uix-sharp:fabric-folded",
	});
}

export default Component;
