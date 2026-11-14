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
		"content": `<style>.nwytiqrbv {
  d: path("M3.5 3.25h9v10.5h-9ZM8 13.75c0 5 4 2.5 7.5 7m-4.5 0h10.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.unzt6uboc {
  d: path("M8 6.25c1.5 1.75 1.75 2.5 1.75 3a1.75 1.75 0 0 1-3.5 0c0-.5.25-1.25 1.75-3Z");
}
</style><g class="ulnmmdpxh"><path class="nwytiqrbv"/><path class="unzt6uboc"/></g>`,
		"fallback": "uix-sharp:blood-transfusion",
	});
}

export default Component;
