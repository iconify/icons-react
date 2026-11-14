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
		"content": `<style>.fapoahlvy {
  d: path("M12 8.5V5.75L8 2.5m4 3.25l4-3.25M8.5 16.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.o-o9zybvr {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o-o9zybvr"/><path class="fapoahlvy"/></g>`,
		"fallback": "uix-sharp:b-cell",
	});
}

export default Component;
