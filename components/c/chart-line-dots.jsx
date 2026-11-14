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
		"content": `<style>.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxglvg0au {
  d: path("M5.75 16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm4-6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm4.5 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5-7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-9.25 8l2-3.5m2.25-.25l2 2m2-.25l2-4.5");
}
</style><g class="ulnmmdpxh"><path class="j_q_y1bdx"/><path class="yxglvg0au"/></g>`,
		"fallback": "uix-sharp:chart-line-dots",
	});
}

export default Component;
