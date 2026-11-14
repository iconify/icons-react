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
		"content": `<style>.llutszbko {
  d: path("M15.75 6.5h3v12h-3ZM8 13h.01");
}

.q9dcoub0a {
  d: path("M13 2.5h8.5v19H13Zm0 12.75a5.5 5.5 0 1 1 0-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q9dcoub0a"/><path class="llutszbko"/></g>`,
		"fallback": "uix-sharp:dock-slot",
	});
}

export default Component;
