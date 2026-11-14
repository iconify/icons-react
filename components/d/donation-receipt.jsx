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
		"content": `<style>.ope5kkyif {
  d: path("M12.25 18.65V20l-3.5-1.75l-3.75 2V3h14v9.25h-6.75v4.3M8.5 6.5h7m-7 3h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.va60734bt {
  d: path("M18 21.5L15.5 19c-1-1-.75-3.5 1.25-3.5c.75 0 1 .5 1.25 1c.25-.5.5-1 1.25-1c2 0 2.25 2.5 1.25 3.5Z");
}
</style><g class="ulnmmdpxh"><path class="ope5kkyif"/><path class="va60734bt"/></g>`,
		"fallback": "uix-sharp:donation-receipt",
	});
}

export default Component;
