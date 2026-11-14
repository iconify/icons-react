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
		"content": `<style>.f5o48nbhq {
  d: path("M9.25 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.q2msebkga {
  d: path("M10.25 8h3.5v4.5h-3.5ZM12 12.5l-2.5 3V19a2.5 2.5 0 0 0 5 0v-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f5o48nbhq"/><path class="q2msebkga"/></g>`,
		"fallback": "uix-sharp:fishing-swivel",
	});
}

export default Component;
