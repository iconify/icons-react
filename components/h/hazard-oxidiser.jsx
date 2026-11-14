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

.w-og12zlz {
  d: path("M7 16.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.xt9ywwthk {
  d: path("M8 13.5c-1.5-3 .5-5.5 1.5-8q2.25 2.25 2.25 4.5C12.5 8 13.5 5.5 14 2.5c3 3 3.5 7.5 2 11");
}
</style><g class="ulnmmdpxh"><path class="w-og12zlz"/><path class="xt9ywwthk"/></g>`,
		"fallback": "uix-sharp:hazard-oxidiser",
	});
}

export default Component;
