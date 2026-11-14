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
		"content": `<style>.ah0x-8bfe {
  d: path("M12.5 7L15 9.5L12.5 12");
}

.ofrwl5b8s {
  d: path("M12 21.5c-3-3-6.5-7-6.5-12a6.5 6.5 0 0 1 13 0c0 5-3.5 9-6.5 12Zm-3-12h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ofrwl5b8s"/><path class="ah0x-8bfe"/></g>`,
		"fallback": "uix-sharp:arrive-right",
	});
}

export default Component;
