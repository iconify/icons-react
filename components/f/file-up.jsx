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

.wqyxje6ue {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M12 18v-6.5M9.5 14l2.5-2.5l2.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="wqyxje6ue"/></g>`,
		"fallback": "uix-sharp:file-up",
	});
}

export default Component;
