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
		"content": `<style>.c10dxy0af {
  d: path("M2.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0h4m6-5.75H13a1.5 1.5 0 0 0-1.5 1.5v8.5a1.5 1.5 0 0 0 1.5 1.5h4.5");
}

.kuosxwh9l {
  d: path("M14.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c10dxy0af"/><path class="kuosxwh9l"/></g>`,
		"fallback": "uix-sharp:aircraft-tow-bar",
	});
}

export default Component;
