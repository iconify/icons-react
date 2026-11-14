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
		"content": `<style>.s0qagjb0b {
  d: path("M6.5 7.5h5v9h-5Z");
}

.tuq6cxboy {
  d: path("M4 13a5 5 0 0 0 10 0m-5 5v3m8.75-17.25l.75 1.75l1.75.75L18.5 7l-.75 1.75L17 7l-1.75-.75L17 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s0qagjb0b"/><path class="tuq6cxboy"/></g>`,
		"fallback": "uix-sharp:ai-mic",
	});
}

export default Component;
