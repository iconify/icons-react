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
		"content": `<style>.ka-t9s-zl {
  d: path("M5.5 6.5h4v5h-4Zm9 0h4v5h-4ZM12 7.75h.01m-.01 2.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_rvjt7dj {
  d: path("M2.5 3.5h19v11h-19Zm2.5 11v7m14-7v7");
}
</style><g class="ulnmmdpxh"><path class="x_rvjt7dj"/><path class="ka-t9s-zl"/></g>`,
		"fallback": "uix-sharp:hockey-scoreboard",
	});
}

export default Component;
