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

.ulwa7mbla {
  d: path("M7.75 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4.5 0V7c2.25.5 3.25 2 3.25 3.5");
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="ulwa7mbla"/></g>`,
		"fallback": "uix-sharp:genre-ambient",
	});
}

export default Component;
