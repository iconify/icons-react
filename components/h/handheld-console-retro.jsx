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
		"content": `<style>.b5q2itb1l {
  d: path("M7.75 5h8.5v6.5h-8.5ZM9 14.25v3.5M7.25 16h3.5m4.5-1.75h.01M13.5 16.5h.01");
}

.rnszyfbvu {
  d: path("M7 2.5h10a2 2 0 0 1 2 2v12a5 5 0 0 1-5 5H7a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rnszyfbvu"/><path class="b5q2itb1l"/></g>`,
		"fallback": "uix-sharp:handheld-console-retro",
	});
}

export default Component;
