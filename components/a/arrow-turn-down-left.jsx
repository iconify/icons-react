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
		"content": `<style>.c486jtb9l {
  d: path("m3.5 15l4 4l4-4");
}

.i697pwblp {
  d: path("M20.5 5h-8a5 5 0 0 0-5 5v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i697pwblp"/><path class="c486jtb9l"/></g>`,
		"fallback": "uix-sharp:arrow-turn-down-left",
	});
}

export default Component;
