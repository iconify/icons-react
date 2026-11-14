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
		"content": `<style>.c1u3oobbx {
  d: path("M9.5 10L12 7.5l2.5 2.5m-5 4l2.5 2.5l2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrg-a2nbz {
  d: path("M5 3.5h14A1.5 1.5 0 0 1 20.5 5v14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Zm7 4v9");
}
</style><g class="ulnmmdpxh"><path class="zrg-a2nbz"/><path class="c1u3oobbx"/></g>`,
		"fallback": "uix-sharp:arrow-up-down-square",
	});
}

export default Component;
