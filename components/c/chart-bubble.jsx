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

.pz5kpu7ls {
  d: path("M7 14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12.25 8a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3 8a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_q_y1bdx"/><path class="pz5kpu7ls"/></g>`,
		"fallback": "uix-sharp:chart-bubble",
	});
}

export default Component;
