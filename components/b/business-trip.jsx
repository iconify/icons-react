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
		"content": `<style>.ats88qb5k {
  d: path("M6 7h12v12.5H6Zm3.5 0V2.5h5V7");
}

.s-q4tibsy {
  d: path("M8 20.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ats88qb5k"/><path class="s-q4tibsy"/></g>`,
		"fallback": "uix-sharp:business-trip",
	});
}

export default Component;
