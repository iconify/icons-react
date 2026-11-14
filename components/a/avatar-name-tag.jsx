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
		"content": `<style>.bdr-44zay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM6.5 14c0-2.25 2.5-3.5 5.5-3.5s5.5 1.25 5.5 3.5M3 16.75h18l-2 2.5l2 2.5H3Z");
}
</style><path class="bdr-44zay"/>`,
		"fallback": "uix-sharp:avatar-name-tag",
	});
}

export default Component;
