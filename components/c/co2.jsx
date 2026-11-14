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
		"content": `<style>.gu2d5jb4w {
  d: path("M6.5 20.5h11a4.5 4.5 0 0 0 0-9a6.5 6.5 0 0 0-13 .5a4.5 4.5 0 0 0 2 8.5Z");
}

.qhjnlwbsv {
  d: path("M8.5 13a2.25 2.25 0 1 0 0 4m2-2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6.25-.25a1.25 1.25 0 0 1 2.5 0c0 1-2.5 1.25-2.5 2.25h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gu2d5jb4w"/><path class="qhjnlwbsv"/></g>`,
		"fallback": "uix-sharp:co2",
	});
}

export default Component;
