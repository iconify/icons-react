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
		"content": `<style>.f-m7hbcac {
  d: path("M5 2.5h14v7H5Zm-.5 11a7.5 3.5 0 1 0 15 0a7.5 3.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yo1pbhbte {
  d: path("M8.25 13.5a3.75 1.25 0 1 0 7.5 0a3.75 1.25 0 1 0-7.5 0Zm-2.75 2l-1 6m14-6l1 6");
}
</style><g class="ulnmmdpxh"><path class="f-m7hbcac"/><path class="yo1pbhbte"/></g>`,
		"fallback": "uix-sharp:commode",
	});
}

export default Component;
