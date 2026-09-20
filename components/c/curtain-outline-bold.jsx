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
		"content": `<style>.c7dgfu7wx {
  d: path("M2 4h20");
}

.o1_lmbxyf {
  d: path("M21 4v17h-5c-1.5 0 -2 -1 -2 -3V4");
}

.oy6o-dbxk {
  d: path("M3 4v17h5c1.5 0 2 -1 2 -3V4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c7dgfu7wx"/><path class="oy6o-dbxk"/><path class="o1_lmbxyf"/></g>`,
		"fallback": "iconmind:curtain-outline-bold",
	});
}

export default Component;
