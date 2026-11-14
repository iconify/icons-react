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
		"content": `<style>.g397z_b6v {
  d: path("M6.5 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM16 7.5h2.75a2.25 2.25 0 0 1 0 4.5H16Zm0 4.5h3.25a2.25 2.25 0 0 1 0 4.5H16Z");
}

.j_gt_bb_l {
  d: path("M3.5 2h9v20h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_gt_bb_l"/><path class="g397z_b6v"/></g>`,
		"fallback": "uix-sharp:bus-priority-signal",
	});
}

export default Component;
