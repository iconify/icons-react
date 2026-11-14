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
		"content": `<style>.mf9donbso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h3.5v8.5H3Zm14.5 0H21v8.5h-3.5ZM4.75 11.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3m-7.25 3v7");
}
</style><path class="mf9donbso"/>`,
		"fallback": "uix-sharp:control-yoke",
	});
}

export default Component;
