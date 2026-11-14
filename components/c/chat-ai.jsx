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
		"content": `<style>.esd9hfqww {
  d: path("M4.5 3h15a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-9L6 21v-3.5H4.5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z");
}

.futg1bblw {
  d: path("M7 8.5h10v6H7ZM12 6v2.5m-2 3h.01m3.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="esd9hfqww"/><path class="futg1bblw"/></g>`,
		"fallback": "uix-sharp:chat-ai",
	});
}

export default Component;
