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
		"content": `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.mjwhy7b6h {
  d: path("M6.5 11a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.pgvy_tbgk {
  d: path("M9.5 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 0v5.5q0 2 2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="mjwhy7b6h"/><path class="pgvy_tbgk"/></g>`,
		"fallback": "uix-sharp:fire-hose-sign",
	});
}

export default Component;
