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
		"content": `<style>.nlfj-2b-b {
  d: path("M3 4v17M21 4v17M3 8l3 3c3 4.5 9 4.5 12 0l3-3");
}

.qrl6ul59e {
  d: path("M6 11c3 1.75 9 1.75 12 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nlfj-2b-b"/><path class="qrl6ul59e"/></g>`,
		"fallback": "uix-sharp:hammock",
	});
}

export default Component;
