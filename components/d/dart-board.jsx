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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yugeds9td {
  d: path("M2.5 13.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}

.z41mhfzug {
  d: path("M6 13.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5 0h.01m-.01 0l9-9m0-2.25V4.5h2.25");
}
</style><g class="ulnmmdpxh"><path class="yugeds9td"/><path class="z41mhfzug"/></g>`,
		"fallback": "uix-sharp:dart-board",
	});
}

export default Component;
