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
		"content": `<style>.fh2eoxb1n {
  d: path("M12.5 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-6-9l9 9M2.5 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.hpcayv25t {
  d: path("M9.5 15.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpcayv25t"/><path class="fh2eoxb1n"/></g>`,
		"fallback": "uix-sharp:borescope",
	});
}

export default Component;
