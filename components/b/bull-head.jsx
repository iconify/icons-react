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
		"content": `<style>.ekygrhbdm {
  d: path("M10 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.25-9h.01m4.49 0h.01");
}

.hf1-ywb7x {
  d: path("M6.5 6.5h11L16 14c-.5 2-2 3-4 3s-3.5-1-4-3Zm0 0c-3 0-4-1.5-4-4m15 4c3 0 4-1.5 4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hf1-ywb7x"/><path class="ekygrhbdm"/></g>`,
		"fallback": "uix-sharp:bull-head",
	});
}

export default Component;
