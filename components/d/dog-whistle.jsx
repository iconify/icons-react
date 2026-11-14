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
		"content": `<style>.eze5h4biv {
  d: path("M2 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm13-2a4 4 0 0 1 4 4m-4-7a7 7 0 0 1 7 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yz9qscb4w {
  d: path("M2.5 11.5H12A4.5 4.5 0 1 1 7.5 16v-1h-5Z");
}
</style><g class="ulnmmdpxh"><path class="yz9qscb4w"/><path class="eze5h4biv"/></g>`,
		"fallback": "uix-sharp:dog-whistle",
	});
}

export default Component;
