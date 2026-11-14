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
		"content": `<style>.bohozf9ne {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M10 11.25h-.5a1 1 0 0 0-1 1V14l-1 1l1 1v1.75a1 1 0 0 0 1 1h.5m4-7.5h.5a1 1 0 0 1 1 1V14l1 1l-1 1v1.75a1 1 0 0 1-1 1H14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="bohozf9ne"/></g>`,
		"fallback": "uix-sharp:file-css",
	});
}

export default Component;
