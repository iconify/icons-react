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
		"content": `<style>.lt-egr91f {
  d: path("M8.5 3h7v4.5h-7ZM12 17.25s-3.25-1.85-3.25-4c0-1.05.85-1.75 1.75-1.75c.7 0 1.2.4 1.5 1c.3-.6.8-1 1.5-1c.9 0 1.75.7 1.75 1.75c0 2.15-3.25 4-3.25 4Z");
}

.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="re3nbbcdl"/><path class="lt-egr91f"/></g>`,
		"fallback": "uix-sharp:clipboard-heart",
	});
}

export default Component;
