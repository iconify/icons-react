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
		"content": `<style>.p65b5eblj {
  d: path("M9.5 7.5a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Zm-4 6.75a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Zm8 0a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="p65b5eblj"/></g>`,
		"fallback": "uix-sharp:cells-view",
	});
}

export default Component;
