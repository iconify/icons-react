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
		"content": `<style>.ev55nvbtd {
  d: path("M8.5 3.5L4 5.75L2.5 11L6 12v8.5h12V12l3.5-1L20 5.75L15.5 3.5Z");
}

.fsbt4lbyy {
  d: path("M8.5 3.5L9 6h6l.5-2.5M12 6v14.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ev55nvbtd"/><path class="fsbt4lbyy"/></g>`,
		"fallback": "uix-sharp:cycling-jersey",
	});
}

export default Component;
