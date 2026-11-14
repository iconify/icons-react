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
		"content": `<style>.fcdahq_1c {
  d: path("M6.25 15.5h4.5V21h-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v27ycmtoi {
  d: path("m3 13.75l2.25-4l4-1.75L13 9.75l2.25 4v7H3ZM17 21V7a2.25 2.25 0 0 1 4.5 0v14");
}
</style><g class="ulnmmdpxh"><path class="v27ycmtoi"/><path class="fcdahq_1c"/></g>`,
		"fallback": "uix-sharp:barn-silo",
	});
}

export default Component;
