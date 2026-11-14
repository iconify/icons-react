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
		"content": `<style>.lyr3ccqnk {
  d: path("M10 2.5h4A2.5 2.5 0 0 1 16.5 5v7.5A2.5 2.5 0 0 1 14 15h-4a2.5 2.5 0 0 1-2.5-2.5V5A2.5 2.5 0 0 1 10 2.5Zm2 16v3m-3.5 0h7");
}

.m1l7gp4zs {
  d: path("M4.5 9v1.5a7.5 7.5 0 0 0 15 0V9m-12-.25h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lyr3ccqnk"/><path class="m1l7gp4zs"/></g>`,
		"fallback": "uix-sharp:condenser-mic",
	});
}

export default Component;
