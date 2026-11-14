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
		"content": `<style>.qj9tk2pva {
  d: path("m2.808 16.95l3.535-3.536l4.243 4.243l-3.536 3.535Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-__--b3p {
  d: path("m6.697 13.768l7.071-7.071l3.535 3.535l-7.071 7.071Zm7.071-7.071l2.651-.884l1.768 1.768l-.884 2.651Zm3.535 0l1.768-1.768");
}
</style><g class="ulnmmdpxh"><path class="qj9tk2pva"/><path class="x-__--b3p"/></g>`,
		"fallback": "uix-sharp:chalk-marker",
	});
}

export default Component;
