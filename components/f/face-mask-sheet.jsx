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
		"content": `<style>.awcyona0b {
  d: path("M4.5 12a7.5 9.5 0 1 0 15 0a7.5 9.5 0 1 0-15 0Z");
}

.pylvtrbuh {
  d: path("M7.25 10a1.75 1.5 0 1 0 3.5 0a1.75 1.5 0 1 0-3.5 0Zm6 0a1.75 1.5 0 1 0 3.5 0a1.75 1.5 0 1 0-3.5 0ZM9.5 15.5h5V18h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="awcyona0b"/><path class="pylvtrbuh"/></g>`,
		"fallback": "uix-sharp:face-mask-sheet",
	});
}

export default Component;
