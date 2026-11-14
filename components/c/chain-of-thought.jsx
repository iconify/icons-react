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
		"content": `<style>.acbjty-8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12h9.5a2.75 2.75 0 1 0-.5-5.5a4.6 4.6 0 0 0-9 0A2.75 2.75 0 0 0 9 12Zm-1.75 3.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-3 2.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM3 21h.01");
}
</style><path class="acbjty-8s"/>`,
		"fallback": "uix-sharp:chain-of-thought",
	});
}

export default Component;
