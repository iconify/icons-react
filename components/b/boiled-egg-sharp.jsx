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
		"content": `<style>.fr9vmkbmk {
  d: path("M8.5 14v-2.75L10 9");
}

.o-hpvjb2b {
  d: path("M12 2.75c-4 0-7 6.25-7 11a7 7 0 0 0 14 0c0-4.75-3-11-7-11Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="o-hpvjb2b"/><path class="fr9vmkbmk"/></g>`,
		"fallback": "iconoven:boiled-egg-sharp",
	});
}

export default Component;
