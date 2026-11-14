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
		"content": `<style>.n4bbdabks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c2.5 0 6 4 6 6.5c0 2-1.5 2.5-3 2.5c-1 0-2-.5-3-.5s-2 .5-3 .5c-1.5 0-3-.5-3-2.5C6 16 9.5 12 12 12ZM2 12a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0Zm4.5-6a2 2.75 0 1 0 4 0a2 2.75 0 1 0-4 0Zm7 0a2 2.75 0 1 0 4 0a2 2.75 0 1 0-4 0Zm4.5 6a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0Z");
}
</style><path class="n4bbdabks"/>`,
		"fallback": "uix-sharp:dog-paw-print",
	});
}

export default Component;
