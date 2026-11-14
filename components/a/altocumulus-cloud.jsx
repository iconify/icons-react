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
		"content": `<style>.cspeg2byw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5a2.75 2.75 0 0 1 5.5 0a3.25 3.25 0 1 1 5.5 0a2.75 2.75 0 0 1 5.5 0Zm2 8a2.75 2.75 0 0 1 5.5 0a3.25 3.25 0 1 1 5.5 0a2.75 2.75 0 0 1 5.5 0Z");
}
</style><path class="cspeg2byw"/>`,
		"fallback": "uix-sharp:altocumulus-cloud",
	});
}

export default Component;
