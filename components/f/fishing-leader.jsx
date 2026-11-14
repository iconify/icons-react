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
		"content": `<style>.iw2nrqqlb {
  d: path("M14 8v9a3.75 3.75 0 0 1-7.5 0v-2.5m0 0l2 2");
}

.q71dsyb7t {
  d: path("M11.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q71dsyb7t"/><path class="iw2nrqqlb"/></g>`,
		"fallback": "uix-sharp:fishing-leader",
	});
}

export default Component;
