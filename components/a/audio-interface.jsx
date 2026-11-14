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
		"content": `<style>.l25b7bu1r {
  d: path("M5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7.5 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uykogrl1p {
  d: path("M2.5 7.5h19v9h-19Z");
}
</style><g class="ulnmmdpxh"><path class="uykogrl1p"/><path class="l25b7bu1r"/></g>`,
		"fallback": "uix-sharp:audio-interface",
	});
}

export default Component;
