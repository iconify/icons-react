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
		"content": `<style>.f__zl1yhs {
  d: path("M12.941 18.5H2.5l7.5-15l5.29 10.581");
}

.sz5sxluht {
  d: path("m8.5 18.5l1.5-4l1.5 4m7.25-2.75a3 3 0 1 0 3 3a2.75 2.75 0 0 1-3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f__zl1yhs"/><path class="sz5sxluht"/></g>`,
		"fallback": "uix-sharp:charity-sleepout",
	});
}

export default Component;
