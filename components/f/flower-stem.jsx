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
		"content": `<style>.e1k99j3pm {
  d: path("M12 3.5a2.5 2.5 0 0 1 4 2.25a2.5 2.5 0 0 1 0 4.5a2.5 2.5 0 0 1-4 2.25a2.5 2.5 0 0 1-4-2.25a2.5 2.5 0 0 1 0-4.5a2.5 2.5 0 0 1 4-2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v50jkmbro {
  d: path("M10.25 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 12.5v8m-2.5 1l5-2");
}
</style><g class="ulnmmdpxh"><path class="e1k99j3pm"/><path class="v50jkmbro"/></g>`,
		"fallback": "uix-sharp:flower-stem",
	});
}

export default Component;
