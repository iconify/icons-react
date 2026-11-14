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
		"content": `<style>.ai-djzful {
  d: path("M5.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM9 6v5");
}

.muyy-sk_r {
  d: path("M3 17V8a2 2 0 0 1 2-2h10l4.5 5H21v6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="muyy-sk_r"/><path class="ai-djzful"/></g>`,
		"fallback": "uix-sharp:airport-shuttle",
	});
}

export default Component;
