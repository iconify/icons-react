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
		"content": `<style>.abt24ibfe {
  d: path("M4.75 14.25a7.25 7.25 0 1 0 14.5 0a7.25 7.25 0 1 0-14.5 0ZM7 4.5c0-1.5 2-2 5-2s5 .5 5 2Zm5 0v7");
}

.tzfxgqboa {
  d: path("M9.5 11.5h5V17h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="abt24ibfe"/><path class="tzfxgqboa"/></g>`,
		"fallback": "uix-sharp:e-unicycle",
	});
}

export default Component;
