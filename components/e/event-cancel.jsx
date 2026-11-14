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
		"content": `<style>.m7yti37fl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18V21H3Zm5-2v3.75m8-3.75v3.75M3 9h18M9 12l6 6m0-6l-6 6");
}
</style><path class="m7yti37fl"/>`,
		"fallback": "uix-sharp:event-cancel",
	});
}

export default Component;
