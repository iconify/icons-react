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
		"content": `<style>.a-8dcmblb {
  d: path("M7.75 15v6L9 19.75L10.25 21v-4.75m3.5 0V21L15 19.75L16.25 21v-6m-7.5-5.25L11 12l4.25-4.5");
}

.jqqdk0m7p {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jqqdk0m7p"/><path class="a-8dcmblb"/></g>`,
		"fallback": "uix-sharp:certified-stamp",
	});
}

export default Component;
