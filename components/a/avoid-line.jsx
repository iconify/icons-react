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
		"content": `<style>.chct0jbng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h2.4m6.2 0h2.4m0 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM16 3.5l-8 17");
}
</style><path class="chct0jbng"/>`,
		"fallback": "uix-sharp:avoid-line",
	});
}

export default Component;
