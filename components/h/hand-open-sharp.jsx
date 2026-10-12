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
		"content": `<style>.cr8apac7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7a1.29 1.29 0 0 1 2.58 0a1.29 1.29 0 0 1 2.59 0a1.29 1.29 0 0 1 2.58 0v8.5a3.88 3.88 0 0 1-7.75 0ZM13.5 7a1.29 1.29 0 0 1 2.58 0a1.29 1.29 0 0 1 2.59 0a1.29 1.29 0 0 1 2.58 0v8.5a3.88 3.88 0 0 1-7.75 0Z");
}
</style><path class="cr8apac7t"/>`,
		"fallback": "iconoven:hand-open-sharp",
	});
}

export default Component;
