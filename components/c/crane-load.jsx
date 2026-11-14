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
		"content": `<style>.h404vvw4n {
  d: path("M14.5 2.5V8a2.5 2.5 0 0 1-5 0");
}

.pr8xs492v {
  d: path("m7 15l5-4.5l5 4.5M4.5 15h15v6.5h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h404vvw4n"/><path class="pr8xs492v"/></g>`,
		"fallback": "uix-sharp:crane-load",
	});
}

export default Component;
