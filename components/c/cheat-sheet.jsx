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

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}

.wxbqg09rz {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-12 2.75h9v2.5h-9Zm0 5.25h6V19h-6Z");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="wxbqg09rz"/></g>`,
		"fallback": "uix-sharp:cheat-sheet",
	});
}

export default Component;
