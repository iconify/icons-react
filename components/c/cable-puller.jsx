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
		"content": `<style>.e_buvbbmu {
  d: path("M4 8a5.5 5.5 0 1 0 11 0A5.5 5.5 0 1 0 4 8Z");
}

.ext23b30v {
  d: path("M9.5 2.5H19V17a2.5 2.5 0 0 1-5 0v-1.5");
}

.g6xh1ob7e {
  d: path("M7.75 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e_buvbbmu"/><path class="ext23b30v"/><path class="g6xh1ob7e"/></g>`,
		"fallback": "uix-sharp:cable-puller",
	});
}

export default Component;
