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
		"content": `<style>.k8bz4suhp {
  d: path("M10 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-2 6.75c0-1.25 1.75-2 4-2s4 .75 4 2");
}

.rwb6es6pn {
  d: path("M4.5 3h15a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H10L5.5 21v-3.5h-1a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rwb6es6pn"/><path class="k8bz4suhp"/></g>`,
		"fallback": "uix-sharp:impact-story",
	});
}

export default Component;
