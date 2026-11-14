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

.vuwhuc_8p {
  d: path("M14.5 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.vyyln6rvk {
  d: path("M16 5.5V15a4.5 4.5 0 0 1-9 0v-3.5");
}
</style><g class="ulnmmdpxh"><path class="vuwhuc_8p"/><path class="vyyln6rvk"/></g>`,
		"fallback": "uix-sharp:barbless-hook",
	});
}

export default Component;
